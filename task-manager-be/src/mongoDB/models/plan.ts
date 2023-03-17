import { Schema, model } from 'mongoose';

export enum WorkType {
  FE = 'FE',
  BE = 'BE',
  FS = 'FS'
}

const taskSchema = new Schema({
    owner: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    task: {
      type: String,
      required: true,
    },
    related_ticket: {
      type: String,
      required: true,
    },
    type_of_work: {
      type: String,
      enum : ['FE','BE', 'FS'],
      required: true,
    },
    created_at: {
      type: Date, 
      default: new Date(Date.now())
    },
    modified_at: {
      type: Date, 
    },
    plan: {
      affected_areas:{
        type: [String]
      },
      steps: {
        type: String
      },
      discussed: {
        type: Boolean
      },
      time_estimate: {
        type: Number
      }
    }
});

export const Task = model('plan', taskSchema);