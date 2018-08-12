import { GraphQLNonNull } from 'graphql';

import Store from '../../../models/stores';
import { StoresType, StoresInputType } from '../../types/stores';

export default {
  type: StoresType,
  args: {
    data: {
      type: new GraphQLNonNull(StoresInputType)
    }
  },
  resolve(root, params) {
    const store = new Store(params.data);
    const newStore = store.save();
    if (!newStore) throw Error('Error at add Store');
    return newStore;
  }
};
