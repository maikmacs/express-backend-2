'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
    }
  },
  resolve: function resolve(root, params) {
    var deleteProduct = _products2.default.findByIdAndRemove(params.id).exec();
    if (!deleteProduct) throw Error('Error at delete product');
    return deleteProduct;
  }
};