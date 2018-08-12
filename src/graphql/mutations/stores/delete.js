import { GraphQLNonNull, GraphQLID } from 'graphql';

import Store from '../../../models/stores';
import { StoresType, StoresInputType } from '../../types/stores';

export default {
  type: StoresType,
  args: {
    id: {
      name: 'ID',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    const deleteStore = Store.findByIdAndRemove(params.id).exec();
    if (!deleteStore) throw Error('Error at delete Store');
    return deleteStore;
  }
};
