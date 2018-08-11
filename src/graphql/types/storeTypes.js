import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull
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
