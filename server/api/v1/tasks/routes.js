// server/api/v1/tasks/routes.js

import { Router } from 'express';
import  * as controller from './controller.js';

const router = Router();

/*
router.get('/', (req, res, next) => {
  res.json({
    message: 'Get all tasks',
  });
});
*/

/*
 * /api/tasks/ POST - CREATE
 * /api/tasks/ GET - READ ALL
 * /api/tasks/:id GET - READ ONE
 * /api/tasks/:id PUT - UPDATE
 * /api/tasks/:id ERASE - ERASE
 */

router
  .route('/')
  .post(controller.create)  
  .get(controller.all);

router
  .route('/:id')
  .get(controller.read)
  .put(controller.update)
  .delete(controller.erase);

export { router };
