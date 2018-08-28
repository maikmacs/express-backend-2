'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _stores = require('../../../models/stores');

var _stores2 = _interopRequireDefault(_stores);

var _stores3 = require('../../types/stores');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var singleStore = {
  type: _stores3.StoresType,
  args: {
    id: {
      name: 'ID',
      type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
    }
  },
  resolve: function resolve(root, params) {
    var store = _stores2.default.findById(params.id).exec();
    return store;
  }
};

exports.default = singleStore;