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

export { logger };
