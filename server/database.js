// server/database.js

import mongoose, { Mongoose } from "mongoose";
import { logger } from './config/logger.js';

export function connect(
  { protocol = 'mongodb', url, username = '', password = ''},
  options = {}
) {
  let db_url = '';

  // Required auth
  if (username && password) {
    db_url = `${protocol}://${username}:${password}@${url}`;
  } else {
    db_url = `${protocol}://${url}`;
  }

  mongoose.connect(db_url, {
    ...options,
    /* deprecated  */
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
  });

  mongoose.connection.on('open', () => {
    logger.info('Database connected');
  });

  mongoose.connection.on('close', () => {
    logger.info('Database disconnected');
  });

  mongoose.connection.on('error', (err) => {
    logger.error(`Database connection error: ${err}`);
  });

  process.on('SIGINT', () => {
    mongoose.connection.close( () => {
      logger.info('Database connection disconnected through app termination');
      process.exit(0);
    });
  });
};

export function disconnect() {
  mongoose.connection.close( () => {
    logger.info('Database disconnected');
  });
};
