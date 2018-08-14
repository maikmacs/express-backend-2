'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _stores = require('../../../models/stores');

var _stores2 = _interopRequireDefault(_stores);

var _stores3 = require('../../types/stores');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: _stores3.StoresType,
  args: {
    data: {
      type: new _graphql.GraphQLNonNull(_stores3.StoresInputType)
    }
  },
  resolve: function resolve(root, params) {
    var store = new _stores2.default(params.data);
    var newStore = store.save();
    if (!newStore) throw Error('Error at add Store');
    return newStore;
  }
};