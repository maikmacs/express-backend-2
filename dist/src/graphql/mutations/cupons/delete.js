'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _cupons = require('../../../models/cupons');

var _cupons2 = _interopRequireDefault(_cupons);

var _cupons3 = require('../../types/cupons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: _cupons3.CuponsType,
  args: {
    id: {
      name: 'ID',
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
    }
  },
  resolve: function resolve(root, params) {
    var deleteCupon = _cupons2.default.findByIdAndRemove(params.id).exec();
    if (!deleteCupon) throw Error('Error al borrar la servicio');
    return deleteCupon;
  }
};