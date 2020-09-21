import gql from 'graphql-tag';

const ConversionListQuery = gql`
  query ConversionList {
    conversions {
      _id
      originCurrency
      targetCurrency
      value
      result
    }
  }
`;

export default ConversionListQuery;
