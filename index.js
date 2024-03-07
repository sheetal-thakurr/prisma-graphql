const express = require("express");
require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const graphqlServer = require("./graphql/graphqlServer");

const port = process.env.PORT;
const app = express();

graphqlServer(app);
global.prisma = new PrismaClient()

app.use(express.json());

app.listen(port, () => {
    console.log(`🚀 server is running at http://localhost:${port}`);
})



