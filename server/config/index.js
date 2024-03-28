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
};

export { config };
