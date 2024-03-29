// server/api/index.js

import express from 'express';

const router = express.Router();

router.route('/tasks').get((req, res, next) => {
  res.json({
    message: 'GET all tasks',
  });
});

export { router };
