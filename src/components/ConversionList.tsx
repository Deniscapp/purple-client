import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { StyledTypography } from './styledComponents';

const CONVERSIONS = gql`
  query AllConversions {
    conversions {
      _id
      originCurrency
      targetCurrency
      value
      result
      createdAt
    }
  }
`;

interface IConversion {
  _id: string;
  originCurrency: string;
  targetCurrency: string;
  value: number;
  result: number;
  createdAt: Date;
}

const ConversionsList = () => {
  const { data } = useQuery(CONVERSIONS);
  return (
    <>
      <StyledTypography variant="h4" align="left">
        Most recent conversions
      </StyledTypography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Created on</TableCell>
              <TableCell>Value</TableCell>
              <TableCell>Origin Currency</TableCell>
              <TableCell>Target Currency</TableCell>
              <TableCell>Converted Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.conversions?.map((conversion: IConversion) => (
              <TableRow key={conversion._id}>
                <TableCell>
                  {new Intl.DateTimeFormat('en-GB').format(
                    conversion.createdAt
                  )}
                </TableCell>
                <TableCell>
                  {new Intl.NumberFormat('en-IN', {
                    maximumSignificantDigits: 3,
                  }).format(conversion.value)}
                </TableCell>
                <TableCell>{conversion.originCurrency}</TableCell>
                <TableCell>{conversion.targetCurrency}</TableCell>
                <TableCell>
                  {new Intl.NumberFormat('en-IN', {
                    maximumSignificantDigits: 3,
                  }).format(conversion.result)}{' '}
                  {conversion.targetCurrency}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ConversionsList;
