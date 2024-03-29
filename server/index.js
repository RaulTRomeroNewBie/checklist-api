// server/index.js

import express from 'express';
// import morgan from 'morgan';
import requestsID from 'express-request-id';
import { logger } from './config/logger.js';

// Init app
const app = express();

// Setup middleware
app.use(requestsID());
//app.use(morgan('combined', { stream: { write: (message) => logger.info(message) } }));
app.use(logger.requests);

app.get('/', (req, res, next) => {
  res.json({
    message: 'Welcome to the API',
  });
});

// No route found handler
app.use((req, res, next) => {
  next({
    message: 'Route not found',
    statusCode: 404,
    level: 'warn'
  });
});

// Error handler
app.use((err, req, res, next) => {
  const { message, statusCode = 500, level = 'error' } = err;
  const log = `${logger.header(req)} ${statusCode} ${message}`;

  logger[level](log);

  res.status(statusCode);
  res.json({
    message,
  });
});

export { app };
