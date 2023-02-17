import { User } from "../../mongoDB/models/users"

const userResolvers = {
  Query: {
    get_users: async (_) => {
      return await User.find({}).exec()
    }
  },

  Mutation:  {
    add_user: async (_, args) => {
      try {
        await User.create(args);
        return 'User added successfully';
      } catch(e) {
        return e.message;
      }
    }
  }
}

export default userResolvers;