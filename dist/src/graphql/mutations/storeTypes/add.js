'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _storeTypes = require('../../../models/storeTypes');

var _storeTypes2 = _interopRequireDefault(_storeTypes);

var _storeTypes3 = require('../../types/storeTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: _storeTypes3.StoresTypesType,
  args: {
    data: {
      type: new _graphql.GraphQLNonNull(_storeTypes3.StoresTypesInputType)
    }
  },
  resolve: function resolve(root, params) {
    var storeType = new _storeTypes2.default(params.data);
    var newStoreType = storeType.save();
    if (!newStoreType) throw Error('Error al crear el servicio');
    return newStoreType;
  }
};