import { GraphQLList } from 'graphql';

import Stores from '../../../models/stores';
import { StoresType } from '../../types/stores';

const allStores = {
  type: new GraphQLList(StoresType),
  resolve() {
    const stores = Stores.find().exec();
    return stores;
  }
};

export default allStores;
