// server/config/index.js
/*
const config = {
  server: {
    port: 3000,
  },
};
*/

// require('dotenv').config('');

import dotenv from 'dotenv';
dotenv.config();

const config = {
  server: {
    port: process.env.SERVER_PORT,
  },
  database: {
    protocol: process.env.DATABASE_PROTOCOL,
    url: process.env.DATABASE_URL,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  }
};

export { config };
