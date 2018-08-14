'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _stores = require('../../../models/stores');

var _stores2 = _interopRequireDefault(_stores);

var _stores3 = require('../../types/stores');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAllStores = {
  type: new _graphql.GraphQLList(_stores3.StoresType),
  resolve: function resolve() {
    var stores = _stores2.default.find().exec();
    return stores;
  }
};

exports.default = queryAllStores;