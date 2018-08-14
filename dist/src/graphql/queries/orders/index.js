'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _all = require('./all');

var _all2 = _interopRequireDefault(_all);

var _single = require('./single');

var _single2 = _interopRequireDefault(_single);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  allOrders: _all2.default,
  singleOrder: _single2.default
};