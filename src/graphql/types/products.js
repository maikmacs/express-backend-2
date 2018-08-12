import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLFloat,
  GraphQLInputObjectType
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
    }
    // type: {
    //   type: GraphQLString
    // }
  })
});

export const ProductsInputType = new GraphQLInputObjectType({
  name: 'addProducts',
  description: 'Add Products to BDD',
  fields: () => ({
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
    }
    // type: {
    //   type: GraphQLString
    // }
  })
});
