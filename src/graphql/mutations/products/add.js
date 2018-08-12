import { GraphQLNonNull } from 'graphql';

import Products from '../../../models/products';
import { ProductsType, ProductsInputType } from '../../types/products';

export default {
  type: ProductsType,
  args: {
    data: {
      type: new GraphQLNonNull(ProductsInputType)
    }
  },
  resolve(root, params) {
    const products = new Products(params.data);
    const newProduct = products.save();
    if (!newProduct) throw Error('Error at create Product :(');
    return newProduct;
  }
};
