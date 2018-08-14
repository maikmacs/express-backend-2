'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _orders = require('../../../models/orders');

var _orders2 = _interopRequireDefault(_orders);

var _orders3 = require('../../types/orders');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var querySingleOrder = {
  type: _orders3.OrdersType,
  args: {
    id: {
      name: 'ID',
      type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
    }
  },
  resolve: function resolve(root, params) {
    var order = _orders2.default.findById(params.id).exec();
    return order;
  }
};

exports.default = querySingleOrder;