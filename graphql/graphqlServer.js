const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");

const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");
const { context } = require("../middleware/contextMiddleware");


const server = new ApolloServer({
    typeDefs,
    resolvers,
}
);
const graphqlServer = async (app) => {
    await server.start();
    app.use("/graphql", expressMiddleware(server,
        { context: context }
    ))
};

module.exports = graphqlServer;