import gql from 'graphql-tag';

const StatisticsQuery = gql`
  query StatisticsQuery {
    currentStats {
      mostPolularCurrency
      totalConverted
      totalConversions
    }
  }
`;

export default StatisticsQuery;
