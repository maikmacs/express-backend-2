'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoresInputType = exports.StoresType = exports.ScoreType = undefined;

var _graphql = require('graphql');

var _products = require('./products');

var _products2 = require('../../models/products');

var _products3 = _interopRequireDefault(_products2);

var _storeTypes = require('./storeTypes');

var _storeTypes2 = require('../../models/storeTypes');

var _storeTypes3 = _interopRequireDefault(_storeTypes2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScoreType = exports.ScoreType = new _graphql.GraphQLObjectType({
  name: 'Score',
  description: 'Score from Store',
  fields: function fields() {
    return {
      _id: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
      },
      comment: {
        type: _graphql.GraphQLString
      },
      stars: {
        type: _graphql.GraphQLFloat
      }
    };
  }
});

var StoresType = exports.StoresType = new _graphql.GraphQLObjectType({
  name: 'Stores',
  description: 'Stores from DB',
  fields: function fields() {
    return {
      _id: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
      },
      name: {
        type: _graphql.GraphQLString
      },
      coordinates: {
        type: new _graphql.GraphQLList(_graphql.GraphQLID)
      },
      adress: {
        type: _graphql.GraphQLString
      },
      email: {
        type: _graphql.GraphQLString
      },
      phone: {
        type: _graphql.GraphQLInt
      },
      type: {
        type: _storeTypes.StoresTypesType,
        resolve: function resolve(store) {
          var type = store.type;

          return _storeTypes3.default.findById(type).exec();
        }
      },
      score: {
        type: new _graphql.GraphQLList(ScoreType)
      },
      schedule: {
        type: _graphql.GraphQLString
      },
      description: {
        type: _graphql.GraphQLString
      },
      picture: {
        type: _graphql.GraphQLString
      },
      price: {
        type: _graphql.GraphQLString
      },
      products: {
        type: _products.ProductsType,
        resolve: function resolve(store) {
          var products = store.products;
          //return Product.find({_id:{$in:products}}).exec()

          return _products3.default.findById(products).exec();
        }
      }
    };
  }
});

var StoresInputType = exports.StoresInputType = new _graphql.GraphQLInputObjectType({
  name: 'addStores',
  description: 'Mutation for add Stores',
  fields: function fields() {
    return {
      name: {
        type: _graphql.GraphQLString
      },
      coordinates: {
        type: new _graphql.GraphQLList(_graphql.GraphQLID)
      },
      adress: {
        type: _graphql.GraphQLString
      },
      email: {
        type: _graphql.GraphQLString
      },
      phone: {
        type: _graphql.GraphQLInt
      },
      type: {
        type: _graphql.GraphQLString
      },
      score: {
        type: new _graphql.GraphQLList(_graphql.GraphQLID)
      },
      schedule: {
        type: _graphql.GraphQLString
      },
      description: {
        type: _graphql.GraphQLString
      },
      picture: {
        type: _graphql.GraphQLString
      },
      price: {
        type: _graphql.GraphQLString
      },
      products: {
        type: new _graphql.GraphQLList(_graphql.GraphQLID)
      }
    };
  }
});