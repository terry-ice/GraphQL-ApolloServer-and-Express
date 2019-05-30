// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const { randomBytes } = require("crypto");
// const { promisify } = require("util");
// const { transport, makeANiceEmail } = require("../mail");
// const { hasPermission } = require("../utils");
const Mutation = {
  async createItem(parent, args, ctx, info) {
    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args,
        },
      },
      info
    );

    console.log(item);

    return item;
  },
};

module.exports = Mutation;
