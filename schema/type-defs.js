const { gql } = require("apollo-server");
const typeDefs = gql`
  #graphql
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
  }

  type Query {
    users: [User!]!
  }
`;
module.exports = { typeDefs };
