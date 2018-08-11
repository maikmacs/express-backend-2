import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLInputObjectType
} from 'graphql';

export const CuponsType = new GraphQLObjectType({
  name: 'Cupons',
  description: 'Cupons from DB',
  fields: () => ({
    _id: {
      type: GraphQLNonNull(GraphQLID)
    },
    name: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    discount: {
      type: GraphQLInt
    }
  })
});

export const CuponInputType = new GraphQLInputObjectType({
  name: 'addCupons',
  description: 'Mutation para agregar cupones',
  fields: () => ({
    name: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    discount: {
      type: GraphQLInt
    }
  })
});
