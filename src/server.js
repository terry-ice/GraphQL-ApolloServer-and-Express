/*
 * @Author: terry
 * @Date: 2019-05-21 15:16:30
 * @Last Modified by: https://github.com/terry-ice
 * @Last Modified time: 2019-06-09 18:16:10
 */

// demo https://github.com/prisma/graphql-yoga/blob/master/examples/hello-world/index.js

import { GraphQLServer } from 'graphql-yoga';
import Mutation from './graphql/resolvers/Mutation'
import Query from './graphql/resolvers/Query'
import db from './graphql/db';

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
