import userResolvers from "./user";
import merge from 'lodash/merge'
import taskResolvers from "./plan";

const resolvers = merge({}, userResolvers, taskResolvers)

export default resolvers;
