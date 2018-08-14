'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
    },
    data: {
      name: 'data',
      type: new _graphql.GraphQLNonNull(_stores3.StoresInputType)
    }
  },
  resolve: function resolve(root, params) {
    return _stores2.default.findByIdAndUpdate(params.id, { $set: _extends({}, params.data) }, { new: true }).then(function (store) {
      return store;
    }).catch(function (err) {
      return Error('Error at Update');
    });
  }
};