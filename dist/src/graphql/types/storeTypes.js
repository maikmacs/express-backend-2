'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoresTypesInputType = exports.StoresTypesType = undefined;

var _graphql = require('graphql');

var StoresTypesType = exports.StoresTypesType = new _graphql.GraphQLObjectType({
  name: 'StoreTypes',
  description: 'Store Type from DB',
  fields: function fields() {
    return {
      _id: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
      },
      name: {
        type: _graphql.GraphQLString
      },
      description: {
        type: _graphql.GraphQLString
      }
    };
  }
});

var StoresTypesInputType = exports.StoresTypesInputType = new _graphql.GraphQLInputObjectType({
  name: 'addStoreTypes',
  description: 'Mutattion to add Store Types',
  fields: function fields() {
    return {
      name: {
        type: _graphql.GraphQLString
      },
      description: {
        type: _graphql.GraphQLString
      }
    };
  }
});