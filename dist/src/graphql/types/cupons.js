'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CuponInputType = exports.CuponsType = undefined;

var _graphql = require('graphql');

var CuponsType = exports.CuponsType = new _graphql.GraphQLObjectType({
  name: 'Cupons',
  description: 'Cupons from DB',
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
      },
      discount: {
        type: _graphql.GraphQLInt
      }
    };
  }
});

var CuponInputType = exports.CuponInputType = new _graphql.GraphQLInputObjectType({
  name: 'addCupons',
  description: 'Mutation para agregar cupones',
  fields: function fields() {
    return {
      name: {
        type: _graphql.GraphQLString
      },
      description: {
        type: _graphql.GraphQLString
      },
      discount: {
        type: _graphql.GraphQLInt
      }
    };
  }
});