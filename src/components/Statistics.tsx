import React from 'react';

import ResultCard from './ResultCard';
import { StyledTypography } from './styledComponents';
import { Grid } from './styledComponents';

import { useStatisticsQueryQuery } from '../gen-types';

const Statistics = (): JSX.Element => {
  const { data, loading } = useStatisticsQueryQuery();
  const totalConverted = data?.currentStats.totalConverted
    ? `${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(
        data?.currentStats.totalConverted
      )} USD`
    : '-';
  return (
    <>
      <StyledTypography variant="h4" align="left">
        Statistics
      </StyledTypography>
      <Grid>
        <ResultCard
          key={0}
          loading={loading}
          value={data?.currentStats.mostPolularCurrency ?? 0}
          title="Most Popular Currency"
        />
        <ResultCard
          key={1}
          loading={loading}
          value={data?.currentStats.totalConversions ?? 0}
          title="Total of Conversions"
        />
        <ResultCard
          key={2}
          loading={loading}
          value={totalConverted}
          title="Total Converted"
        />
      </Grid>
    </>
  );
};

export default Statistics;
