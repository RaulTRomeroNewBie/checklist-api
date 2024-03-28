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
  const message = 'Route not found';
  const statusCode = 404;

  logger.warn(message);

  res.status(statusCode);
  res.json({
    message,
  });
});

// Error handler
app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;

  logger.error(message);

  res.status(statusCode);
  res.json({
    message,
  });
});

export { app };
