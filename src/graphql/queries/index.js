import users from './user';
import cupons from './cupons';
import products from './products';
import stores from './stores';

export default {
  ...users,
  ...cupons,
  ...products,
  ...stores
};
