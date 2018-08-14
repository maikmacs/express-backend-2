'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var StoresSchema = new Schema({
  name: { type: String, required: true },
  adress: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  type: [{ type: Schema.Types.ObjectId, ref: 'StoreTypes' }],
  score: {
    type: [{
      comment: String,
      stars: Number
    }]
  },
  schedule: { type: String, required: true },
  description: { type: String, required: true },
  picture: {
    type: String,
    default: 'https://nl.freelogodesign.org/Content/img/logo-ex-5.png'
  },
  price: { type: String },
  products: [{ type: Schema.Types.ObjectId, ref: 'Products' }]
}, { collection: 'Stores', timestamps: true });

exports.default = _mongoose2.default.model('Stores', StoresSchema);