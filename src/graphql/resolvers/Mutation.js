/*
 * @Author: terry
 * @Date: 2019-06-09 13:46:14
 * @Last Modified by: https://github.com/terry-ice
 * @Last Modified time: 2019-06-09 21:24:55
 */

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
  async createArticle(parent, args, ctx, info) {
    return ctx.db.mutation.createArticle(
      {
        data: {
          ...args,
        },
      },
      info,
    );
  },
  async createCategory(parent, args, ctx, info) {
    return ctx.db.mutation.createCategory(
      {
        data: {
          ...args,
        },
      },
      info,
    );
  }
};
export default Mutation;