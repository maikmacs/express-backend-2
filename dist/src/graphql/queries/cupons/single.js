'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _cupons = require('../../../models/cupons');

var _cupons2 = _interopRequireDefault(_cupons);

var _cupons3 = require('../../types/cupons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var querySingleCupon = {
  type: _cupons3.CuponsType,
  args: {
    id: {
      name: 'ID',
      type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
    }
  },
  resolve: function resolve(root, params) {
    var cupon = _cupons2.default.findById(params.id).exec();
    return cupon;
  }
};

exports.default = querySingleCupon;