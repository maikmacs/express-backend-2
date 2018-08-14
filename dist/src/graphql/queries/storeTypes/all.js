'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _storeTypes = require('../../../models/storeTypes');

var _storeTypes2 = _interopRequireDefault(_storeTypes);

var _storeTypes3 = require('../../types/storeTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAllStoreTypes = {
  type: new _graphql.GraphQLList(_storeTypes3.StoresTypesType),
  resolve: function resolve() {
    var storeTypes = _storeTypes2.default.find().exec();

    return storeTypes;
  }
};

exports.default = queryAllStoreTypes;