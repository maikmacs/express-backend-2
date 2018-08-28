'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserType = undefined;

var _graphql = require('graphql');

var UserType = exports.UserType = new _graphql.GraphQLObjectType({
  name: 'Users',
  description: 'Users from DB',
  fields: function fields() {
    return {
      _id: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
      },
      name: {
        type: _graphql.GraphQLString
      },
      last_name: {
        type: _graphql.GraphQLString
      },
      email: {
        type: _graphql.GraphQLString
      },
      birth_date: {
        type: _graphql.GraphQLString
      },
      picture: {
        type: _graphql.GraphQLString
      },
      gender: {
        type: _graphql.GraphQLString
      },
      adress: {
        type: (0, _graphql.GraphQLList)(_graphql.GraphQLString)
      },
      phone: {
        type: _graphql.GraphQLInt
      }
    };
  }
});