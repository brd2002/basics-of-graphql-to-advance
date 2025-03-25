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
  input createUserInput{
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
  }
  input updateUsernameInput{
    id: ID!
    newUsername: String!
  }
  type Mutation{
    createUser(input: createUserInput!): User!
    updateUsername(input: updateUsernameInput!): User
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
