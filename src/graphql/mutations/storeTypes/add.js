import { GraphQLNonNull } from 'graphql';

import StoreTypes from '../../../models/storeTypes';
import { StoresTypesType, StoresTypesInputType } from '../../types/storeTypes';

export default {
  type: StoresTypesType,
  args: {
    data: {
      type: new GraphQLNonNull(StoresTypesInputType)
    }
  },
  resolve(root, params) {
    const storeType = new StoreTypes(params.data);
    const newStoreType = storeType.save();
    if (!newStoreType) throw Error('Error al crear el servicio');
    return newStoreType;
  }
};
