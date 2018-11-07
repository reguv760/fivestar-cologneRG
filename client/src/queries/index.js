import { gql } from "apollo-boost";

// schema
// resolver
// test
// test shell on client
// test query::

export const GET_ALL_COLOGNES = gql`
  query {
    getAllColognes {
      scentName
      scentPrice
      description
      createdDate
      likes
    }
  }
`;

export const SIGNUP_USER_MUTATION = gql`
  mutation SIGNUP_USER_MUTATION(
    $username: String!
    $email: String!
    $password: String!
  ) {
    signupUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;
