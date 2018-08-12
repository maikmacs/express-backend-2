import { GraphQLNonNull, GraphQLID } from 'graphql';

import Products from '../../../models/products';
import { ProductsType, ProductsInputType } from '../../types/products';

export default {
  type: ProductsType,
  args: {
    id: {
      name: 'ID',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    const deleteProduct = Products.findByIdAndRemove(params.id).exec();
    if (!deleteProduct) throw Error('Error at delete product');
    return deleteProduct;
  }
};
