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
    data: {
      type: new _graphql.GraphQLNonNull(_cupons3.CuponInputType)
    }
  },
  resolve: function resolve(root, params) {
    var cupon = new _cupons2.default(params.data);
    var newCupon = cupon.save();
    if (!newCupon) throw Error('Error al crear el servicio');
    return newCupon;
  }
};