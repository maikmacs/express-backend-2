'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var OrdersSchema = new Schema({
  store: { type: Schema.Types.ObjectId, ref: 'Store', required: true },
  user: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
  products: [{ type: Schema.Types.ObjectId, ref: 'Products', required: true }],
  cupon: [{ type: Schema.Types.ObjectId, ref: 'Cupons' }],
  adress: { type: String, required: true },
  total: { type: Number, required: true },
  status_order: { type: String, enum: ['in_work', 'send', 'completed'] },
  status_pay: {
    type: Boolean,
    required: true,
    default: 0
  }
}, { collection: 'Orders', timestamps: true });

exports.default = _mongoose2.default.model('Orders', OrdersSchema);