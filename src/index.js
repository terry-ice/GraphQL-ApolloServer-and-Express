/*
 * @Author: terry
 * @Date: 2019-05-21 15:22:00
 * @Last Modified by: https://github.com/terry-ice
 * @Last Modified time: 2019-05-21 15:28:01
 */

import cookieParser from 'cookie-parser';
require('dotenv').config({ path: '../variables.env' });
import createServer from './server';

const server = createServer();

server.express.use(cookieParser());
server.express.use((req, res, next) => {
  // const { token } = req.cookies;
  // if (token) {
  //   const { userId } = jwt.verify(token, process.env.APP_SECRET);
  //   // put the userId onto the req for future requests to access
  //   req.userId = userId;
  // }
  next();
});

// 2. Create a middleware that populates the user on each request

server.express.use(async (req, res, next) => {
  // if they aren't logged in, skip this
  // if (!req.userId) return next();
  // const user = await db.query.user(
  //   { where: { id: req.userId } },
  //   "{ id, permissions,email, name }"
  // );
  // req.user = user;
  next();
});

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  config => {
    console.log(
      `Server is now running on port http://localhost:${config.port}`,
    );
  },
);
