import jwt from 'jsonwebtoken';
import User from '../models/users';

const secret = 'S1nD3l4nT41';
const expiresIn = '1d';

export const createToken = (email, password) => {
  if (!email || !password) {
    return false;
  }

  const compare = new Promise((resolve, reject) => {
    User.findOne({ email: email })
      .then(user => {
        if (!user) reject(false);
        user.comparePassword(password, (err, isMatch) => {
          if (isMatch) {
            let payload = {
              email: user.email,
              id: user._id
            };

            const token = jwt.sign(payload, secret, { expiresIn });
            resolve(token);
          } else {
            reject(false);
          }
        });
      })
      .catch(err => false);
  });

  return compare;
};
