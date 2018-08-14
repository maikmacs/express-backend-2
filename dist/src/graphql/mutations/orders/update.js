'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
    },
    data: {
      name: 'data',
      type: new _graphql.GraphQLNonNull(_orders3.OrdersInputType)
    }
  },
  resolve: function resolve(root, params) {
    return _orders2.default.findByIdAndUpdate(params.id, { $set: _extends({}, params.data) }, { new: true }).then(function (order) {
      return order;
    }).catch(function (err) {
      return Error('Error at update off Order');
    });
  }
};