import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { StyledTypography } from './styledComponents';
import { useConversionListQuery } from '../gen-types';

const ConversionsList = (): JSX.Element => {
  const { data } = useConversionListQuery();
  return (
    <>
      <StyledTypography variant="h4" align="left">
        Most recent conversions
      </StyledTypography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Value</TableCell>
              <TableCell>Origin Currency</TableCell>
              <TableCell>Target Currency</TableCell>
              <TableCell>Converted Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.conversions?.map((conversion) => (
              <TableRow key={conversion?._id}>
                <TableCell>
                  {conversion?.value &&
                    new Intl.NumberFormat('en-IN', {
                      maximumSignificantDigits: 3,
                    }).format(conversion.value)}
                </TableCell>
                <TableCell>{conversion?.originCurrency}</TableCell>
                <TableCell>{conversion?.targetCurrency}</TableCell>
                <TableCell>
                  {conversion?.result &&
                    new Intl.NumberFormat('en-IN', {
                      maximumSignificantDigits: 3,
                    }).format(conversion.result)}{' '}
                  {conversion?.targetCurrency}
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
