import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { TextField } from '@material-ui/core';

import { CurrencyType } from '../gen-types';

const CURRENCIES_QUERY = gql`
  query AvailableCurrencies {
    currencies
  }
`;

interface ICurrencySelect {
  label?: string;
  value: string;
  setValue: (value: CurrencyType) => void;
}

const CurrencySelect = ({
  label,
  value,
  setValue,
}: ICurrencySelect): JSX.Element => {
  const { data, loading, error } = useQuery(CURRENCIES_QUERY);

  return (
    <Autocomplete
      options={data?.currencies ?? []}
      style={{ width: 150 }}
      disabled={Boolean(error) || loading}
      value={value}
      onChange={(_, value) => setValue(value as CurrencyType)}
      renderInput={(params) => (
        <TextField {...params} label={label ?? 'Label'} variant="outlined" />
      )}
    />
  );
};

export default CurrencySelect;
