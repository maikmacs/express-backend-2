'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var CuponsSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  discount: { type: Number, required: true }
}, { collection: 'Cupons', timestamps: true });

exports.default = _mongoose2.default.model('Cupon', CuponsSchema);