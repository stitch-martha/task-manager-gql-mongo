import { Task } from "../../mongoDB/models/plan"

const taskResolvers = {
  Query: {},

  Mutation:  {
    add_task: async (_, args) => {
      const newTask = new Task({...args.body, 
        plan: {
          affected_areas: args.body.affected_areas,
          steps: args.body.steps,
          time_estimate: args.body.time_estimate,
          discussed: args.body.discussed,
      }});
      newTask.created_at = new Date(Date.now());
      
      try {
        newTask.save();
        return 'Task added successfully';
      } catch(e) {
        return e.message;
      }
    }
  },
}

export default taskResolvers;