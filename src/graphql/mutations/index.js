import cupons from './cupons';
import storeTypes from './storeTypes';
import stores from './stores';
import products from './products';

export default {
  ...cupons,
  ...storeTypes,
  ...stores,
  ...products
};
