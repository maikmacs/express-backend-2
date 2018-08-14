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
    id: {
      name: 'ID',
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
    }
  },
  resolve: function resolve(root, params) {
    var deleteStoreType = _storeTypes2.default.findByIdAndRemove(params.id).exec();
    if (!deleteStoreType) throw Error('Error al borrar la servicio');
    return deleteStoreType;
  }
};