import users from './user';
import cupons from './cupons';
import products from './products';
import stores from './stores';
import storesTypes from './storeTypes';
import orders from './orders';

export default {
  ...users,
  ...cupons,
  ...products,
  ...stores,
  ...storesTypes,
  ...orders
};
