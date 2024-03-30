// index.js

import http from 'http';
import { app } from './server/index.js';
import { config } from './server/config/index.js';
import  * as database  from './server/database.js';

// Connect to database
database.connect(config.database, {});

const { port } = config.server;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running at ${port}`);
});
