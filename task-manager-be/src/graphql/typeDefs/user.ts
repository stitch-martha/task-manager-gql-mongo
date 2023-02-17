import gql from "graphql-tag";

export const userTypeDefs = gql`
    type User {
      id: ID
      name: String
      family_name: String
    }

    type Query {
      get_users: [User]
    }

    type Mutation {
      add_user(id: ID!, name: String!, family_name: String!): String
    }
  `