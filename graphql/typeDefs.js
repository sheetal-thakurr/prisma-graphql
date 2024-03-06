const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar DateTime

  type User {
    id: Int!
    first_name: String
    last_name: String
    email: String!
    password: String!
    phone:String
    reset_password_token: String
    reset_password_sent_at: DateTime
    active_status: ActiveStatus!
    createdAt: DateTime
    updatedAt: DateTime
  }

  enum ActiveStatus {
    active
    inactive
    deleted
  }

  type Query {
    getUserById(id: ID!): User
    getAllUsers: [User]!
  }

  type authData {
    user: User!
    token: String!
  }
  type Mutation {
    signInUser(input: CreateUser!): authData!
  }

  type Mutation {
    loginUser(input: login!): authData
  }

  input login {
    email: String!
    password: String!
  }

  input CreateUser {
    first_name: String
    last_name: String
    email: String!
    password: String!
    phone:String
    active_status: ActiveStatus!
  }
`;

module.exports = { typeDefs };
