// server/api/v1/tasks/model.js

import mongoose from 'mongoose';

const { Schema }= mongoose;

const fields ={
  _id: String,
  title: {
    type: String,
    required: true,
    trim: true,
    /* cSpell:disable */
    maxlength: 128,
    /* cSpell:enable */
  },
  completed: {
    type: Boolean,
    default: false, 
  },
  description:{
    type: String,
    default: '',
    trim: true,
    /* cSpell:disable */
    maxlength: 128,
    /* cSpell:enable */
  },
  url: {
    type: String,
    default: '',
    trim: true,
  },
  dueDate: {
    type: Date,
    default: null,
  },
};

const taskSchema = new Schema(fields, { timestamps: true});

const taskModel = mongoose.model('task', taskSchema);

export { taskModel }
