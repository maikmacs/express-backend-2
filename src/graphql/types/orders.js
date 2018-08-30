import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLInputObjectType,
  GraphQLList
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
  name: 'Orders',
  description: 'Orders from DB',
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
      type: new GraphQLList(ProductsType),
      resolve(store) {
        const { products } = store;
        return Product.find({ _id: { $in: products } }).exec();
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

export const OrdersInputType = new GraphQLInputObjectType({
  name: 'addOrders',
  description: 'Add Orders to DB',
  fields: () => ({
    store: {
      type: GraphQLNonNull(GraphQLID)
    },
    user: {
      type: GraphQLNonNull(GraphQLID)
    },
    products: {
      type: new GraphQLList(GraphQLID)
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
