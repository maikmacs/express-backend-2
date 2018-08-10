import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLList
} from 'graphql';

export const UserType = new GraphQLObjectType({
  name: 'Users',
  description: 'Users from DB',
  fields: () => ({
    _id: {
      type: GraphQLNonNull(GraphQLID)
    },
    name: {
      type: GraphQLString
    },
    last_name: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    birth_date: {
      type: GraphQLString
    },
    username: {
      type: GraphQLString
    },
    picture: {
      type: GraphQLString
    },
    gender: {
      type: GraphQLString
    },
    adress: {
      type: GraphQLList(GraphQLString)
    },
    phone: {
      type: GraphQLInt
    }
  })
});
