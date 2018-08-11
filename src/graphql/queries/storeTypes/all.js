import { GraphQLList } from 'graphql';

import Store from '../../../models/storeTypes';
import { StoresTypesType } from '../../types/storeTypes';

const queryAllStoreTypes = {
  type: new GraphQLList(StoresTypesType),
  resolve() {
    const storeTypes = Store.find().exec();

    return storeTypes;
  }
};

export default queryAllStoreTypes;
