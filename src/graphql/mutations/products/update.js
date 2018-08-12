import { GraphQLNonNull, GraphQLID } from 'graphql';

import Products from '../../../models/products';
import { ProductsType, ProductsInputType } from '../../types/products';

export default {
  type: ProductsType,
  args: {
    id: {
      name: 'ID',
      type: new GraphQLNonNull(GraphQLID)
    },
    data: {
      name: 'data',
      type: new GraphQLNonNull(ProductsInputType)
    }
  },
  resolve(root, params) {
    return Products.findByIdAndUpdate(
      params.id,
      { $set: { ...params.data } },
      { new: true }
    )
      .then(propiedad => propiedad)
      .catch(err => Error('Error at update'));
  }
};
