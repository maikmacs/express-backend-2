import { GraphQLNonNull, GraphQLID } from 'graphql';

import Store from '../../../models/storeTypes';
import { StoresTypesType } from '../../types/storeTypes';

const querySingleStoreType = {
  type: StoresTypesType,
  args: {
    id: {
      name: 'ID',
      type: GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    const store = Store.findById(params.id).exec();
    return store;
  }
};

export default querySingleStoreType;
