const { gql } = require("apollo-server");
const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
  }
  type Movie{
    id: ID!
    name: String!
    yearOfPublication: String!
    isInTheaters: Boolean!
  }
  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]
    movie(id: ID!): Movie!
  }
  enum Nationality {
    BRAZIL
    INDIA
    GERMANY
    CANADA
    CHILE
  }
`;
module.exports = { typeDefs };
