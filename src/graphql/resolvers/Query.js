const { forwardTo } = require("prisma-binding");
// const { hasPermission } = require("../utils");
const Query = {
  async label(parent, args, ctx, info) {
    const items = await ctx.db.query.label();
    return items;
  },
  async labels(parent, args, ctx, info) {
    const items = await ctx.db.query.labels({}, info);
    console.log(items,'items')
    return items;
  },
};

module.exports = Query;
