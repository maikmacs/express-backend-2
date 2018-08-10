import users from './user';
import cupons from './cupons';
import products from './products';

export default {
  ...users,
  ...cupons,
  ...products
};
