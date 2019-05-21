/*
 * @Author: terry
 * @Date: 2019-05-21 15:16:30
 * @Last Modified by: https://github.com/terry-ice
 * @Last Modified time: 2019-05-21 15:41:11
 */

// https://github.com/prisma/graphql-yoga/blob/master/examples/hello-world/index.js
import { GraphQLServer } from 'graphql-yoga';
const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`;

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World by terry!'}`,
  },
};

function createServer() {
  return new GraphQLServer({
    typeDefs,
    resolvers,
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    context: req => ({ ...req }),
  });
}
export default createServer;
