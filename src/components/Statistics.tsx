import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styled from 'styled-components';

import ResultCard from './ResultCard';
import { StyledTypography } from './styledComponents';

const Grid = styled.div`
    display: grid;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    width: 100%;
    grid-template-columns: repeat( auto-fit,minmax(220px,1fr) );
`

const STATISTICS_QUERY = gql`
    query CurrentStatistics {
        currentStats {
            mostPolularCurrency
            totalConverted
            totalConversions
        }
    }
`
const Statistics = () => {
    const { data, loading } = useQuery(STATISTICS_QUERY);
    const totalConverted = data?.currentStats.totalConverted ? 
        `${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(data?.currentStats.totalConverted)} USD` : '-';
    return (
        <>
            <StyledTypography variant="h4" align="left">Statistics</StyledTypography>
            <Grid>
                <ResultCard key={0} loading={loading} value={data?.currentStats.mostPolularCurrency} title="Most Popular Currency" />
                <ResultCard key={1} loading={loading} value={data?.currentStats.totalConversions} title="Total of Conversions" />
                <ResultCard key={2} loading={loading} value={totalConverted} title="Total Converted" />
            </Grid>
        </>
    )
}

export default Statistics;
