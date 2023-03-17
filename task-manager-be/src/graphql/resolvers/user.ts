import { User } from "../../mongoDB/models/users"

const userResolvers = {
  Query: {
    get_users: async (_) => {
      return await User.find({}).exec()
    }
  },

  Mutation:  {
    add_user: async (_, args) => {
      const newUser = new User({
        name: args.name,
        family_name: args.family_name,
     });
      
      try {
        newUser.save();
        return 'User added successfully';
      } catch(e) {
        return e.message;
      }
    }
  },

  User: {
    id: (data)=> data._id 
  }
}

export default userResolvers;