import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const SALT = 10;

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    birth_date: { type: Date },
    password: { type: String, required: true },
    picture: {
      type: String,
      default:
        'https://upload.wikimedia.org/wikipedia/commons/9/93/Default_profile_picture_%28male%29_on_Facebook.jpg'
    },
    gender: { type: String, required: true },
    adress: [],
    phone: { type: Number, required: true },
    user_pay: { type: String }
  },
  { collection: 'Users', timestamps: true }
);

UserSchema.pre('save', function(next) {
  let user = this;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(SALT, (err, salt) => {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(inputPassword, cb) {
  bcrypt.compare(inputPassword, this.password, function(err, isMatch) {
    cb(null, isMatch);
  });
};

export default mongoose.model('Users', UserSchema);
