'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _graphql = require('graphql');

var _products = require('../../../models/products');

var _products2 = _interopRequireDefault(_products);

var _products3 = require('../../types/products');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: _products3.ProductsType,
  args: {
    id: {
      name: 'ID',
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
    },
    data: {
      name: 'data',
      type: new _graphql.GraphQLNonNull(_products3.ProductsInputType)
    }
  },
  resolve: function resolve(root, params) {
    return _products2.default.findByIdAndUpdate(params.id, { $set: _extends({}, params.data) }, { new: true }).then(function (propiedad) {
      return propiedad;
    }).catch(function (err) {
      return Error('Error at update');
    });
  }
};