import gql from "graphql-tag";

export const taskTypeDefs = gql`
    enum WorkType {
      FE
      BE
      FS
    }
    
    type Task {
      owner: ID!
      task: String!
      related_ticket: String!
      type_of_work: WorkType!
      created_at: String
      modified_at: String
      affected_areas: [String]
      steps: String
      discussed: Boolean
      time_estimate: Float
    }


    input TaskCreateInput {
      owner: ID!
      task: String!
      related_ticket: String!
      type_of_work: WorkType
      created_at: String
      affected_areas: [String]
      steps: String
      discussed: Boolean
      time_estimate: Float
    }

    type Mutation {
      add_task(body: TaskCreateInput!): String
    }

  `