const Mutation = {
  async createLabel(parent, args, ctx, info) {
    return ctx.db.mutation.createLabel(
      {
        data: {
          ...args,
        },
      },
      info,
    );
  },
};

module.exports = Mutation;
