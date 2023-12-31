import { gql } from "@apollo/client";

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($arts: [ID]!) {
    checkout(arts: $arts) {
      session
    }
  }
`;