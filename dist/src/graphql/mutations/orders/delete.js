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
    id: {
      name: 'ID',
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
    }
  },
  resolve: function resolve(root, params) {
    var deleteOrder = _orders2.default.findByIdAndRemove(params.id).exec();
    if (!deleteOrder) throw Error('Error at delete order');
    return deleteOrder;
  }
};