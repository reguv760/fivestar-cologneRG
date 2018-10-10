import { gql } from 'apollo-boost';

//schema
//resolver
//test
//test shell on client
// test query::

export const GET_ALL_COLOGNES = gql`
  query {
    getAllColognes {
      scentName
      scentPrice
      description
      createdDate
    }
  }
`;
