import { GraphQLList } from 'graphql';

import Stores from '../../../models/stores';
import { StoresType } from '../../types/stores';

const queryAllStores = {
  type: new GraphQLList(StoresType),
  resolve() {
    const stores = Stores.find().exec();
    return stores;
  }
};

export default queryAllStores;
