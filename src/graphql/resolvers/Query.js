/*
 * @Author: terry
 * @Date: 2019-06-09 13:46:04
 * @Last Modified by: https://github.com/terry-ice
 * @Last Modified time: 2019-06-09 21:28:41
 */

import { forwardTo } from 'prisma-binding';

const Query = {
  article: forwardTo('db'),
  articles: forwardTo('db'),
  label: forwardTo('db'),
  labels: forwardTo('db'),
  categories: forwardTo('db'),
  category: forwardTo('db'),
  user(parent, args, ctx, info) {
    console.log(ctx.request.userId,'ctx');
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId },
      },
      info,
    );
  }
};

export default Query;
