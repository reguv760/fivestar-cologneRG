import { gql } from 'apollo-boost';

// schema
// resolver
// test
// test shell on client
// test query::

// QUERY
export const GET_CURRENT_USER_QUERY = gql`
  query {
    getCurrentUser {
      username
      email
      joinDate
    }
  }
`;

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

// User Mutations
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

export const SIGNIN_USER_MUTATION = gql`
  mutation SIGNIN_USER_MUTATION($username: String!, $password: String!) {
    signinUser(username: $username, password: $password) {
      token
    }
  }
`;
