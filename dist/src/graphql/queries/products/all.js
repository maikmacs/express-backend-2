'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _products = require('../../../models/products');

var _products2 = _interopRequireDefault(_products);

var _products3 = require('../../types/products');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAllProducts = {
  type: new _graphql.GraphQLList(_products3.ProductsType),
  resolve: function resolve() {
    var products = _products2.default.find().exec();
    return products;
  }
};

exports.default = queryAllProducts;