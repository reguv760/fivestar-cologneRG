const express = require('express');
const mongoose = require('mongoose'); // add this
const bodyParser = require('body-parser');

//find variables.env file by requiring 'dotenv' package
require('dotenv').config({ path: 'variables.env' }); // add this

// models
const Cologne = require('./models/Cologne');
const User = require('./models/User');

const PORT = process.env.PORT || 4444;

// bring in GraphQL middleware
const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

// graphql based on external files
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

//begin DB connection:::
mongoose
  .connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('DB connected');
  })
  .catch(err => {
    console.log('Error on start: ' + err.stack);
    process.exit(1);
  });

// initialize your application
const app = express();

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Connect schemas with GraphQL
app.use(
  '/graphql',
  bodyParser.json(), // added after including body-parser;
  graphqlExpress({
    schema,
    context: {
      // pass in mongoose models
      Cologne,
      User,
    },
  })
);

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
