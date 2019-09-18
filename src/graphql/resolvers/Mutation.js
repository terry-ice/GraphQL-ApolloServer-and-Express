/*
 * @Author: terry
 * @Date: 2019-06-09 13:46:14
 * @Last Modified by: https://github.com/terry-ice
 * @Last Modified time: 2019-06-09 21:24:55
 */

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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
          category: {
            connect: {
              id: args.category,
            },
          },
        },
      },
      info,
    );
  },
  deleteArticle(parent, args, ctx, info) {
    return ctx.db.mutation.deleteArticle(
      {
        where: {
          id: args.id,
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
  },
  updateCategory(parent, args, ctx, info) {
    const update = { ...args };
    delete update.id;
    return ctx.db.mutation.updateCategory(
      {
        data: update,
        where: {
          id: args.id,
        },
      },
      info,
    );
  },
  deleteCategory(parent, args, ctx, info) {
    return ctx.db.mutation.deleteCategory(
      {
        where: {
          id: args.id,
        },
      },
      info,
    );
  },
  async login(parent, { email, password }, ctx, info) {
    const user = await ctx.db.query.user({ where: { email } });
    if (!user) {
      throw new Error(`邮箱不存在 ${email}`);
    }
    // 2. Check if their password is correct
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('验证失败!');
    }
    const token = jwt.sign(
      { userId: user.id },
      process.env.APP_SECRET,
    );

    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
    });
    user.token = token;
    return user;
  },
  logout(parent, args, ctx, info) {
    ctx.response.clearCookie('token');
    return { message: 'Goodbye!' };
  },
};
export default Mutation;
