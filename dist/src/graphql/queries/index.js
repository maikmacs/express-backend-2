'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _cupons = require('./cupons');

var _cupons2 = _interopRequireDefault(_cupons);

var _products = require('./products');

var _products2 = _interopRequireDefault(_products);

var _stores = require('./stores');

var _stores2 = _interopRequireDefault(_stores);

var _storeTypes = require('./storeTypes');

var _storeTypes2 = _interopRequireDefault(_storeTypes);

var _orders = require('./orders');

var _orders2 = _interopRequireDefault(_orders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _user2.default, _cupons2.default, _products2.default, _stores2.default, _storeTypes2.default, _orders2.default);