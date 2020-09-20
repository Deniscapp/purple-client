import React, { useState, useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Card, CardContent, TextField } from '@material-ui/core';
import gql from 'graphql-tag';

import CurrencySelect from './CurrencySelect';
import SnarbackContext from './snackbar/SnackbarContext';
import ResultCard from './ResultCard';
import {
  StyledButton,
  Form,
  ConvertionWrapper,
  StyledTypography,
} from './styledComponents';

const NEW_CONVERSION = gql`
  mutation NewConversion($newConversion: NewConversionInput!) {
    newConversion(input: $newConversion) {
      _id
      value
      originCurrency
      targetCurrency
      result
      createdAt
    }
  }
`;

const STATISTICS_QUERY = gql`
  query CurrentStatistics {
    currentStats {
      mostPolularCurrency
      totalConverted
      totalConversions
    }
  }
`;

const ConversionCard = () => {
  const { showSnackbar } = useContext(SnarbackContext);
  const [createConversion, { data, loading }] = useMutation(NEW_CONVERSION, {
    update(cache, { data: { newConversion } }) {
      cache.modify({
        fields: {
          conversions(existingConversions = []) {
            const newConversionRef = cache.writeFragment({
              data: newConversion,
              fragment: gql`
                fragment NewConversion on Conversion {
                  id
                }
              `,
            });
            return [newConversionRef, ...existingConversions];
          },
        },
      });
    },
    refetchQueries: [{ query: STATISTICS_QUERY }],
    onCompleted() {
      return showSnackbar({
        message: 'Convertion completed! ✅',
      });
    },
    onError() {
      return showSnackbar({
        message: 'Sorry, but something went wrong! 😓',
      });
    },
  });
  const [value, setValue] = useState(1);
  const [originCurrency, setOriginCurrency] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');

  const result = `${new Intl.NumberFormat('en-IN', {
    maximumSignificantDigits: 3,
  }).format(data?.newConversion?.result)} ${targetCurrency}`;

  const areInputsFilled = !value || !originCurrency || !targetCurrency;

  return (
    <>
      <StyledTypography variant="h4" align="left">
        Currency converter
      </StyledTypography>
      <ConvertionWrapper>
        <Card>
          <CardContent>
            <Form autoComplete="off">
              <TextField
                type="number"
                variant="outlined"
                label="Value"
                value={value || ''}
                inputProps={{ min: 1 }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setValue(parseFloat(e.target.value))
                }
              />
              <CurrencySelect
                label="Origin"
                value={originCurrency}
                setValue={setOriginCurrency}
              />
              <CurrencySelect
                label="Target"
                value={targetCurrency}
                setValue={setTargetCurrency}
              />
              <StyledButton
                onClick={() =>
                  createConversion({
                    variables: {
                      newConversion: { value, originCurrency, targetCurrency },
                    },
                  })
                }
                variant="contained"
                disabled={loading || areInputsFilled}
                size="large"
              >
                Convert
              </StyledButton>
            </Form>
          </CardContent>
        </Card>
        <ResultCard
          loading={loading}
          value={data?.newConversion?.result ? result : 0}
          title="Result"
        />
      </ConvertionWrapper>
    </>
  );
};

export default ConversionCard;
