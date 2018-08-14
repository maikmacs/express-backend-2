'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _orders = require('../../../models/orders');

var _orders2 = _interopRequireDefault(_orders);

var _orders3 = require('../../types/orders');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: _orders3.OrdersType,
  args: {
    data: {
      type: new _graphql.GraphQLNonNull(_orders3.OrdersInputType)
    }
  },
  resolve: function resolve(root, params) {
    var order = new _orders2.default(params.data);
    var newOrder = order.save();
    if (!newOrder) throw Error('Error at create order');
    return newOrder;
  }
};