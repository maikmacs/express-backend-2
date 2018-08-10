import { GraphQLNonNull, GraphQLID } from 'graphql';

import Stores from '../../../models/stores';
import { StoresType } from '../../types/stores';

const querySingleStore = {
  type: StoresType,
  args: {
    id: {
      name: 'ID',
      type: GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    const store = Stores.findById(params.id).exec();
    return store;
  }
};

export default querySingleStore;
