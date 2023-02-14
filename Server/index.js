const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const colors = require('colors');

const schema = require('./schema/schema')
const connectDb = require('./config/db');

const port = process.env.PORT || 5000;

const app = express();

// Connect DB
connectDb();

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: process.env.NODE_ENV === 'development'
    })
);

app.listen(port, console.log(`Server started on port ${port}`));
