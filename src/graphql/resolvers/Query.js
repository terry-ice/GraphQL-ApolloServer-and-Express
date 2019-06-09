const { forwardTo } = require("prisma-binding");
// const { hasPermission } = require("../utils");
const Query = {
  tag: forwardTo('db'),
  async tag(parent, args, ctx, info) {
    const items = await ctx.db.query.tag();
    return items;
  },
};

module.exports = Query;
