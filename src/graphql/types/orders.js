import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import { StoresType } from './stores';
import Store from '../../models/stores';

import { ProductsType } from './products';
import Product from '../../models/products';

import { UserType } from './users';
import User from '../../models/users';

import { CuponsType } from './cupons';
import Cupon from '../../models/cupons';

export const OrdersType = new GraphQLObjectType({
  name: 'Users',
  description: 'Users from DB',
  fields: () => ({
    _id: {
      type: GraphQLNonNull(GraphQLID)
    },
    store: {
      type: StoresType,
      resolve(order) {
        const { store } = order;
        return Store.findById(store).exec();
      }
    },
    user: {
      type: UserType,
      resolve(order) {
        const { user } = order;
        return User.findById(user).exec();
      }
    },
    products: {
      type: ProductsType,
      resolve(product) {
        const { product } = propiedad;
        return Product.findById(product).exec();
      }
    },
    cupon: {
      type: CuponsType,
      resolve(cupon) {
        const { cupon } = propiedad;
        return Cupon.findById(cupon).exec();
      }
    },
    adress: {
      type: GraphQLString
    },
    total: {
      type: GraphQLInt
    },
    status_order: {
      type: GraphQLBoolean
    },
    status_pay: {
      type: GraphQLBoolean
    }
  })
});
