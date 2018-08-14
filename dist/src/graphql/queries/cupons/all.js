'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _cupons = require('../../../models/cupons');

var _cupons2 = _interopRequireDefault(_cupons);

var _cupons3 = require('../../types/cupons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAllCupons = {
  type: new _graphql.GraphQLList(_cupons3.CuponsType),
  resolve: function resolve() {
    var cupons = _cupons2.default.find().exec();
    return cupons;
  }
};

exports.default = queryAllCupons;