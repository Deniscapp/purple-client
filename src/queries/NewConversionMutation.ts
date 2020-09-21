import gql from 'graphql-tag';

const NewConversionMutation = gql`
  mutation NewConversion($newConversion: NewConversionInput!) {
    newConversion(input: $newConversion) {
      _id
      value
      originCurrency
      targetCurrency
      result
    }
  }
`;

export default NewConversionMutation;
