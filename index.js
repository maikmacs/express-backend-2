import express from 'express';
import parser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import graphQLHTTP from 'express-graphql';
import paypal from 'paypal-rest-sdk';

import { createToken } from './src/resolvers/createToken';
import { verifyToken } from './src/resolvers/verifyToken';

import schema from './src/graphql';

import User from './src/models/users';

const app = express();
const PORT = process.env.PORT || 3002;
const mongoURI =
  process.env.MONGODB_URI ||
  'mongodb://db_user:TestUser1234!@ds113942.mlab.com:13942/sindelantal-clon';

mongoose.connect(
  mongoURI,
  { useNewUrlParser: true }
);

const db = mongoose.connection;
db.on('error', () => console.log('Error al conectar a la BD')).once(
  'open',
  () => console.log('Conectado a la BD')
);

app.use(parser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Server on');
});

paypal.configure({
  mode: 'sandbox', //sandbox or live
  client_id:
    'AVrNDOVJ48PZn7i034b3iZ-x3V0X2cSstKALK6_oETgcyHF-qFqp9xLaWTwZEAMRCFNmtIMGcNGLSQUx',
  client_secret:
    'EJEZid2E2ygCpCeE82Rd5PNao-OOnhX2WiOBLnsDh4QFNBJbUb1Erz7Cd-J85o3KreL94yJUs3tLZjto'
});

app.get('/paypal/buy/:total', (req, res) => {
  const total = req.params.total;

  var payment = {
    intent: 'authorize',
    payer: {
      payment_method: 'paypal'
    },
    redirect_urls: {
      return_url: 'http://localhost:3000/checkout/sucess',
      cancel_url: 'http://localhost:3000/checkout/error'
    },
    transactions: [
      {
        amount: {
          total: total,
          currency: 'MXN'
        },
        description: ' Pedido de Sin delantal ' + total + ''
      }
    ]
  };

  createPay(payment)
    .then(transaction => {
      var id = transaction.id;
      var links = transaction.links;
      var counter = links.length;
      while (counter--) {
        if (links[counter].method == 'REDIRECT') {
          // redirect to paypal where user approves the transaction

          return res.redirect(links[counter].href);
        }
      }
    })
    .catch(err => {
      console.log(err);
      res.redirect('/err');
    });
});

app.post('/paypal/webhook', (req, res) => {
  const body = req.body;

  switch (body.event_type) {
    case 'PAYMENT.CAPTURE.COMPLETED':
      console.log('PAYMENT.CAPTURE.COMPLETE');
      break;
    case 'PAYMENT.CAPTURE.DENIED':
      console.log('PAYMENT.CAPTURE.DENIED');
      break;
    case 'PAYMENT.AUTHORIZATION.CREATED':
      console.log('PAYMENT.AUTHORIZATION.CREATED');
    default:
      console.log(body.summary);
      break;
  }
});

app.post('/user/create', (req, res) => {
  let user = req.body;

  User.create(user)
    .then(user => {
      return res.status(201).json({
        message: 'Usuario Creado',
        id: user._id
      });
    })
    .catch(err => {
      console.log(err);
      return res.status(400).json(err);
    });
});

app.use('/graphql', (req, res, next) => {
  const token = req.headers['authorization'];
  try {
    req.user = verifyToken(token);
    next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

app.use(
  '/graphql',
  graphQLHTTP((req, res) => ({
    schema,
    graphiql: true,
    pretty: true,
    context: {
      user: req.user
    }
  }))
);

app.post('/login', (req, res) => {
  const token = createToken(req.body.email, req.body.password)
    .then(token => {
      res.status(201).json({ token });
    })
    .catch(() => {
      res.status(403).json({ message: 'Login Failed' });
    });
});

app.listen(PORT, () => console.log(`Server on ${PORT}`));

var createPay = payment => {
  return new Promise((resolve, reject) => {
    paypal.payment.create(payment, function(err, payment) {
      if (err) {
        reject(err);
      } else {
        resolve(payment);
      }
    });
  });
};
