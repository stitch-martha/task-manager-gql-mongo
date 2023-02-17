import { gql } from "apollo-server";
export const userTypeDefs = gql `
    type User {
      id: ID
      name: String
      family_name: String
    }

    type Query {
      getUsers(): [User]
    }
`;
