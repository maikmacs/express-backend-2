'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersInputType = exports.OrdersType = undefined;

var _graphql = require('graphql');

var _stores = require('./stores');

var _stores2 = require('../../models/stores');

var _stores3 = _interopRequireDefault(_stores2);

var _products = require('./products');

var _products2 = require('../../models/products');

var _products3 = _interopRequireDefault(_products2);

var _users = require('./users');

var _users2 = require('../../models/users');

var _users3 = _interopRequireDefault(_users2);

var _cupons = require('./cupons');

var _cupons2 = require('../../models/cupons');

var _cupons3 = _interopRequireDefault(_cupons2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrdersType = exports.OrdersType = new _graphql.GraphQLObjectType({
  name: 'Orders',
  description: 'Orders from DB',
  fields: function fields() {
    return {
      _id: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
      },
      store: {
        type: _stores.StoresType,
        resolve: function resolve(order) {
          var store = order.store;

          return _stores3.default.findById(store).exec();
        }
      },
      user: {
        type: _users.UserType,
        resolve: function resolve(order) {
          var user = order.user;

          return _users3.default.findById(user).exec();
        }
      },
      products: {
        type: _products.ProductsType,
        resolve: function resolve(order) {
          var product = order.product;

          return _products3.default.findById(product).exec();
        }
      },
      cupon: {
        type: _cupons.CuponsType,
        resolve: function resolve(order) {
          var cupon = order.cupon;

          return _cupons3.default.findById(cupon).exec();
        }
      },
      adress: {
        type: _graphql.GraphQLString
      },
      total: {
        type: _graphql.GraphQLInt
      },
      status_order: {
        type: _graphql.GraphQLBoolean
      },
      status_pay: {
        type: _graphql.GraphQLBoolean
      }
    };
  }
});

var OrdersInputType = exports.OrdersInputType = new _graphql.GraphQLInputObjectType({
  name: 'addOrders',
  description: 'Add Orders to DB',
  fields: function fields() {
    return {
      store: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
      },
      user: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
      },
      products: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
      },
      cupon: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
      },
      adress: {
        type: _graphql.GraphQLString
      },
      total: {
        type: _graphql.GraphQLInt
      },
      status_order: {
        type: _graphql.GraphQLBoolean
      },
      status_pay: {
        type: _graphql.GraphQLBoolean
      }
    };
  }
});