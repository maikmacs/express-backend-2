import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLFloat,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInputObjectType
} from 'graphql';

import { ProductsType } from './products';
import Product from '../../models/products';

import { StoresTypesType } from './storeTypes';
import StoreType from '../../models/storeTypes';

export const ScoreType = new GraphQLObjectType({
  name: 'Score',
  description: 'Score from Store',
  fields: () => ({
    _id: {
      type: GraphQLNonNull(GraphQLID)
    },
    comment: {
      type: GraphQLString
    },
    stars: {
      type: GraphQLFloat
    }
  })
});

export const StoresType = new GraphQLObjectType({
  name: 'Stores',
  description: 'Stores from DB',
  fields: () => ({
    _id: {
      type: GraphQLNonNull(GraphQLID)
    },
    name: {
      type: GraphQLString
    },
    coordinates: {
      type: new GraphQLList(GraphQLID)
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
      type: StoresTypesType,
      resolve(store) {
        const { type } = store;
        return StoreType.findById(type).exec();
      }
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
      type: new GraphQLList(ProductsType),
      resolve(store) {
        const { products } = store;
        return Product.find({ _id: { $in: products } }).exec();
      }
    }
  })
});

export const StoresInputType = new GraphQLInputObjectType({
  name: 'addStores',
  description: 'Mutation for add Stores',
  fields: () => ({
    name: {
      type: GraphQLString
    },
    coordinates: {
      type: new GraphQLList(GraphQLID)
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
      type: new GraphQLList(GraphQLID)
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
      type: new GraphQLList(GraphQLID)
    }
  })
});
