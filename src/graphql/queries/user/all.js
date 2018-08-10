import { GraphQLList } from 'graphql';

import User from '../../../models/users';
import { UserType } from '../../types/users';

const queryAllUsers = {
  type: new GraphQLList(UserType),
  resolve() {
    const users = User.find().exec();
    return users;
  }
};

export default queryAllUsers;
