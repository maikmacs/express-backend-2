import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLInputObjectType
} from 'graphql';

export const StoresTypesType = new GraphQLObjectType({
  name: 'StoreTypes',
  description: 'Store Type from DB',
  fields: () => ({
    _id: {
      type: GraphQLNonNull(GraphQLID)
    },
    name: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    }
  })
});

export const StoresTypesInputType = new GraphQLInputObjectType({
  name: 'addStoreTypes',
  description: 'Mutattion to add Store Types',
  fields: () => ({
    name: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    }
  })
});
