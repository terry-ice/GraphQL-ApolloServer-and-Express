// This file connects to the remote prisma DB and gives us the ability to query it with JS
const { Prisma } = require('./node_modules/prisma-binding');

const db = new Prisma({
  typeDefs: './prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false,
});

module.exports = db;
