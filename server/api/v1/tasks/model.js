// server/api/v1/tasks/model.js

import mongoose from 'mongoose';

const schema = mongoose.Schema;

const taskSchema = new schema({
  _id: String,
  title: String,
  description: String,
  completed: Boolean,
  url: String,
  dueDate: Date,
});

const taskModel = mongoose.model('task', taskSchema);

export { taskModel }
