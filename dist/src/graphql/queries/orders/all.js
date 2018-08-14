'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _orders = require('../../../models/orders');

var _orders2 = _interopRequireDefault(_orders);

var _orders3 = require('../../types/orders');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAllOrders = {
  type: new _graphql.GraphQLList(_orders3.OrdersType),
  resolve: function resolve() {
    var orders = _orders2.default.find().exec();
    return orders;
  }
};

exports.default = queryAllOrders;