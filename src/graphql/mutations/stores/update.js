import { GraphQLNonNull, GraphQLID } from 'graphql';

import Store from '../../../models/stores';
import { StoresType, StoresInputType } from '../../types/stores';

export default {
  type: StoresType,
  args: {
    id: {
      name: 'ID',
      type: new GraphQLNonNull(GraphQLID)
    },
    data: {
      name: 'data',
      type: new GraphQLNonNull(StoresInputType)
    }
  },
  resolve(root, params) {
    return Store.findByIdAndUpdate(
      params.id,
      { $set: { ...params.data } },
      { new: true }
    )
      .then(store => store)
      .catch(err => Error('Error at Update'));
  }
};
