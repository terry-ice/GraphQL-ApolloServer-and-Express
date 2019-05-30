/*
 * @Author: terry
 * @Date: 2019-05-21 15:16:30
 * @Last Modified by: https://github.com/terry-ice
 * @Last Modified time: 2019-05-21 15:41:11
 */

// https://github.com/prisma/graphql-yoga/blob/master/examples/hello-world/index.js
import { GraphQLServer } from 'graphql-yoga';
const Mutation = require('./graphql/resolvers/Mutation');
const Query = require('./graphql/resolvers/Query');
const db = require('./graphql/db');
function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/graphql/schema.graphql',
    resolvers: {
      Mutation,
      Query,
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    context: req => ({ ...req, db  }),
  });
}
export default createServer;
