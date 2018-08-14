'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SALT = 10;

var Schema = _mongoose2.default.Schema;

var UserSchema = new Schema({
  name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  birth_date: { type: Date },
  password: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  picture: {
    type: String,
    default: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Default_profile_picture_%28male%29_on_Facebook.jpg'
  },
  gender: { type: String, required: true },
  adress: [],
  phone: { type: Number, required: true },
  user_pay: { type: String }
}, { collection: 'Users', timestamps: true });

UserSchema.pre('save', function (next) {
  var user = this;

  if (!user.isModified('password')) return next();

  _bcrypt2.default.genSalt(SALT, function (err, salt) {
    if (err) return next(err);
    _bcrypt2.default.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (inputPassword, cb) {
  _bcrypt2.default.compare(inputPassword, this.password, function (err, isMatch) {
    cb(null, isMatch);
  });
};

exports.default = _mongoose2.default.model('Users', UserSchema);