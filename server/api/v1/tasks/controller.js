// server/api/v1/tasks/controller.js

import { taskModel } from './model.js';

export async function create(req, res, next) {
  const { body = {} } = req;
  const document = new taskModel(body);

  try {
    const doc = await document.save();
    res.status(201);
    res.json(doc);
  } catch (err) {
    next(new Error(err));
  }
  
};

export async function all(req, res, next) {
  try {
    const docs = await taskModel.find({}).exec();
    res.json(docs)
  } catch (err) {
    next(new Error(err));
  }
  
};

export function read(req, res, next) {
  const { params = {} } = req;
  const { id } = params;
  res.json({
    id,
  });
};

export function update(req, res, next) {
  const { body = {}, params = {} } = req;
  const { id } = params;
  res.json({
    id,
    body
  });
};

export function erase(req, res, next) {
  const { params = {} } = req;
  const { id } = params;
  res.json({
    id,
  });
};
