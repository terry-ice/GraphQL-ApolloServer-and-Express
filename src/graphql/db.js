// This file connects to the remote prisma DB and gives us the ability to query it with JS
import { Prisma } from 'prisma-binding';
require('dotenv').config({ path: '../variables.env' });
const db = new Prisma({
  typeDefs: 'src/graphql/prisma.graphql',
  endpoint: 'http://localhost:4466',
  secret: 'omgplzdonttellanyone',
  // endpoint: process.env.PRISMA_ENDPOINT,
  // secret: process.env.PRISMA_SECRET,
  debug: false,
});

export default db;
