import gql from 'graphql-tag';

const CurrenciesQuery = gql`
  query AvailableCurrencies {
    currencies
  }
`;

export default CurrenciesQuery;
