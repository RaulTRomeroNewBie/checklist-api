// server/config/logger.js

import { createLogger, format, transports } from 'winston';
import morgan from 'morgan';
import stripFinalNewline from 'strip-final-newline'

// Setup logger
const logger = createLogger({
  format: format.simple(),
  transports: [new transports.Console()],
});

// Setup requests logger
morgan.token('id', req => req.id);

const requestFormat = ':remote-addr [:date[iso]] :id ":method :url" :status';
const requests = morgan(requestFormat, {
  stream:  {
    write: (message) => {
      // Remove all line breaks
      const log = stripFinalNewline(message);
      return logger.info(log);
    },
  },
});

// Attach to logger object
logger.requests = requests;

// Format as request logger and attach to logger object
logger.header = (req) => {
  const date = new Date().toISOString();
  return `${req.ip} [${date}] ${req.id} "${req.method} ${req.originalUrl}"`;
};

export { logger };
