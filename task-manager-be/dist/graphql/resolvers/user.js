import { User } from "../../mongoDB/models/users";
export const userResolvers = {
    Query: {
        getUsers: () => {
            return User.find()
                .then(user => {
                return user.map(r => ({ ...r }));
            })
                .catch(err => {
                console.error(err);
            });
        }
    }
};
