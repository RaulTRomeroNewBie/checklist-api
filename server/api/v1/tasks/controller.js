// server/api/v1/tasks/controller.js

import { taskModel } from './model.js';

export async function id(req, res, next, id) {
  try {
    const doc = await taskModel.findById(id).exec();
    if(!doc) {
      const message = `${taskModel.modelName} not found`;
      next({
        message,
        statusCode: 404,
        level: 'warn',
      });
    } else {
      req.doc = doc; 
      next();
    }
  } catch(err) {
    next(new Error(err));
  }
}

export async function create(req, res, next) {
  const { body = {} } = req;
  const document = new taskModel(body);

  try {
    const doc = await document.save();
    res.status(201);
    res.json({
        success: true,
        data: doc,
    });
  } catch (err) {
    next(new Error(err));
  }
  
};

export async function all(req, res, next) {
  try {
    const docs = await taskModel.find({}).exec();
    res.json({
      success: true, 
      data: docs,
    });
  } catch (err) {
    next(new Error(err));
  }
  
};

export async function read(req, res, next) {
  const { doc = {} } = req;
  res.json({
    success: true,
    data: doc,
  });
};

export async function update(req, res, next) {
  const { doc = {}, body = {} } = req;
  // La función Object.assign mezcla el contenido del primer objeto doc con el
  // contenido del segundo objeto body, solo a primer nivel, es decir, si tiene
  // propiedades de mayor profundiad no lo realizará, por lo cual se recomienda
  // para otros casos mas avanzados la función 'merge' de la librería 'lodash'.

  Object.assign(doc, body);
  try {
    const updated = await doc.save();
    res.json({
      success: true,
      data: updated,
    });
  } catch (err) {
    next(new Error(err));
  }
};

export async function erase(req, res, next) {
  const { doc = {} } = req;
  try {
    const removed = await doc.deleteOne();
    res.json({
      success: true,
      data: removed,
    });
  } catch (err) {
    next(new Error(err));
  }
};
