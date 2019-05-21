/*
 * @Author: terry
 * @Date: 2019-05-21 15:22:00
 * @Last Modified by: https://github.com/terry-ice
 * @Last Modified time: 2019-05-21 15:28:01
 */

import cookieParser from 'cookie-parser';
require('dotenv').config({ path: '../variables.env' });
import createServer from './createServer';

const server = createServer();

server.express.use(cookieParser());
server.express.use((req, res, next) => {
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
