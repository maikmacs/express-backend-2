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
    id: {
      name: 'ID',
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
    }
  },
  resolve: function resolve(root, params) {
    var deleteStore = _stores2.default.findByIdAndRemove(params.id).exec();
    if (!deleteStore) throw Error('Error at delete Store');
    return deleteStore;
  }
};