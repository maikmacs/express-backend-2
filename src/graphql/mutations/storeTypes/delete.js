import { GraphQLNonNull, GraphQLID } from 'graphql';

import StoreTypes from '../../../models/storeTypes';
import { StoresTypesType, StoresTypesInputType } from '../../types/storeTypes';

export default {
  type: StoresTypesType,
  args: {
    id: {
      name: 'ID',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    const deleteStoreType = StoreTypes.findByIdAndRemove(params.id).exec();
    if (!deleteStoreType) throw Error('Error al borrar la servicio');
    return deleteStoreType;
  }
};
