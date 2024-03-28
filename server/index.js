// server/index.js

import express from 'express';

const port = 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!!!');
});

app.listen(port, () => {
  console.log(`Example app listen on port ${port}`);
});