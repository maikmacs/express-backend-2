import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLFloat,
  GraphQLNonNull
} from 'graphql';

import { ProductsType } from './products';
import Product from '../../models/products';

export const ScoreType = new GraphQLObjectType({
  _id: {
    type: GraphQLNonNull(GraphQLID)
  },
  comment: {
    type: GraphQLString
  },
  estrellas: {
    stars: GraphQLFloat
  }
});

export const StoresType = new GraphQLObjectType({
  name: 'Users',
  description: 'Users from DB',
  fields: () => ({
    _id: {
      type: GraphQLNonNull(GraphQLID)
    },
    name: {
      type: GraphQLString
    },
    adress: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    phone: {
      type: GraphQLInt
    },
    type: {
      type: GraphQLString
    },
    score: {
      type: new GraphQLList(ScoreType)
    },
    schedule: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    picture: {
      type: GraphQLString
    },
    price: {
      type: GraphQLString
    },
    products: {
      type: ProductsType,
      resolve(store) {
        const { product } = store;
        return Product.findById(product).exec();
      }
    }
  })
});
