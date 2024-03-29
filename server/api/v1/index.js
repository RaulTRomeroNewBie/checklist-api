// server/api/v1/index.js

import express from 'express';
import {router as tasks} from './tasks/routes.js';

const router = express.Router();

/*
router.route('/tasks').get((req, res, next) => {
  res.json({
    message: 'GET all tasks',
  });
});
*/
router.use('/tasks', tasks);

export { router };
