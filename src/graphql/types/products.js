import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLFloat
} from 'graphql';

export const ProductsType = new GraphQLObjectType({
  name: 'Products',
  description: 'Products from DB',
  fields: () => ({
    _id: {
      type: GraphQLNonNull(GraphQLID)
    },
    name: {
      type: GraphQLString
    },
    price: {
      type: GraphQLFloat
    },
    picture: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    type: {
      type: GraphQLString
    }
  })
});
