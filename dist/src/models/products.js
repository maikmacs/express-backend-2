'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var ProductsSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  picture: {
    type: String,
    default: 'http://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/521724-istock-545286388.jpg'
  },
  description: { type: String
    //type: { type: String }
  } }, { collection: 'Products', timestamps: true });

exports.default = _mongoose2.default.model('Products', ProductsSchema);