/*
 * @Author: terry
 * @Date: 2019-06-09 13:46:14
 * @Last Modified by: https://github.com/terry-ice
 * @Last Modified time: 2019-06-09 21:24:55
 */


import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
// import {randomBytes} from 'crypto';

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
  },
  async login(parent, { email, password }, ctx, info) {
    // 1. check if there is a user with that email
    const user = await ctx.db.query.user({ where: { email } });
    if (!user) {
      throw new Error(`邮箱不存在 ${email}`);
    }
    // 2. Check if their password is correct
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('验证失败!');
    }
    // 3. generate the JWT Token
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // 4. Set the cookie with the token
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
    });
    // 5. Return the user
    return user;
  },
  logout(parent, args, ctx, info) {
    // ctx.response.clearCookie('token');
    // return { message: 'Goodbye!' };
  },
};
export default Mutation;