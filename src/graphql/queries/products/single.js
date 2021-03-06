import { GraphQLList } from 'graphql';

import Product from '../../../models/products';
import { ProductsType } from '../../types/products';

const querySingleProduct = {
  type: new GraphQLList(ProductsType),
  resolve() {
    const products = Product.find().exec();
    return products;
  }
};

export default querySingleProduct;
