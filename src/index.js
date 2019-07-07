/*
 * @Author: terry
 * @Date: 2019-05-21 15:22:00
 * @Last Modified by: https://github.com/terry-ice
 * @Last Modified time: 2019-05-21 15:28:01
 */

import cookieParser from 'cookie-parser';
require('dotenv').config({ path: '../variables.env' });
import createServer from './server';
// import * as jwt from 'jsonwebtoken';
const server = createServer();

server.express.use(cookieParser());


server.express.use((req, res, next) => {
  // console.log(req.cookies,'req.cookies')
  // const { token } = req.cookies;
  // if (token) {
  //   const { userId } = jwt.verify(token, process.env.APP_SECRET);
  //   req.userId = userId;
  // }
  // console.log(token,'token')
  next();
});

// server.express.use(async (req, res, next) => {
//   if (!req.userId) return next();
//   const user = await db.query.user(
//     { where: { id: req.userId } },
//     '{ id, email, name }',
//   );
//   req.user = user;
//   next();
// });

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
