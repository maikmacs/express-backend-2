import { GraphQLList } from 'graphql';

import Product from '../../../models/products';
import { ProductsType } from '../../types/products';

const queryAllProducts = {
  type: new GraphQLList(ProductsType),
  resolve() {
    const products = Product.find().exec();
    return products;
  }
};

export default queryAllProducts;
