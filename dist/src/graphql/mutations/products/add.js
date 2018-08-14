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
    data: {
      type: new _graphql.GraphQLNonNull(_products3.ProductsInputType)
    }
  },
  resolve: function resolve(root, params) {
    var products = new _products2.default(params.data);
    var newProduct = products.save();
    if (!newProduct) throw Error('Error at create Product :(');
    return newProduct;
  }
};