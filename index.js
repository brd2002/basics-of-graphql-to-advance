const { ApolloServer } = require("apollo-server");
const {typeDefs} = require("./schema/type-defs");
const {resolvers} = require("./schema/resolvers");
// createing server
const server = new ApolloServer({
    typeDefs,
    resolvers
});
server.listen().then(({ url }) => console.log(`Server ready at ${url}`));