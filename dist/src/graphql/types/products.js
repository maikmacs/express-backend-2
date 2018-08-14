'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductsInputType = exports.ProductsType = undefined;

var _graphql = require('graphql');

var ProductsType = exports.ProductsType = new _graphql.GraphQLObjectType({
  name: 'Products',
  description: 'Products from DB',
  fields: function fields() {
    return {
      _id: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
      },
      name: {
        type: _graphql.GraphQLString
      },
      price: {
        type: _graphql.GraphQLFloat
      },
      picture: {
        type: _graphql.GraphQLString
      },
      description: {
        type: _graphql.GraphQLString
        // type: {
        //   type: GraphQLString
        // }
      } };
  }
});

var ProductsInputType = exports.ProductsInputType = new _graphql.GraphQLInputObjectType({
  name: 'addProducts',
  description: 'Add Products to BDD',
  fields: function fields() {
    return {
      name: {
        type: _graphql.GraphQLString
      },
      price: {
        type: _graphql.GraphQLFloat
      },
      picture: {
        type: _graphql.GraphQLString
      },
      description: {
        type: _graphql.GraphQLString
        // type: {
        //   type: GraphQLString
        // }
      } };
  }
});