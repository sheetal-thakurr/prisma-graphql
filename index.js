const express =  require("express");
require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const {ApolloServer} = require("@apollo/server");
const {expressMiddleware} = require("@apollo/server/express4");
const port = process.env.PORT;
const app = express();
// const router = require("./routes/user");
const { typeDefs } = require("./graphql/typeDefs");
const { resolvers } = require("./graphql/resolvers");

const server = new ApolloServer({
    typeDefs,
  resolvers
}
);

const serverStart = async ()=>{
    await server.start();
    app.use("/graphql", expressMiddleware(server, {context: async ({req})=> {
        return {
            name: "sheetal"
        }
    }}))
} 
serverStart();
global.prisma = new PrismaClient()


app.use(express.json());
// app.use("/auth" ,router)

app.listen(port, () =>{
    console.log(`🚀 server is running at http://localhost:${port}`);
})