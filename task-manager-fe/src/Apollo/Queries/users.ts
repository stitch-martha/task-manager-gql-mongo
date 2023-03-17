import { gql } from "@apollo/client";

export const USERS = gql`
  query get_users {
    get_users {
      id
      name
      family_name
    }
  }
`;

