'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _storeTypes = require('../../../models/storeTypes');

var _storeTypes2 = _interopRequireDefault(_storeTypes);

var _storeTypes3 = require('../../types/storeTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var querySingleStoreType = {
  type: _storeTypes3.StoresTypesType,
  args: {
    id: {
      name: 'ID',
      type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
    }
  },
  resolve: function resolve(root, params) {
    var store = _storeTypes2.default.findById(params.id).exec();
    return store;
  }
};

exports.default = querySingleStoreType;