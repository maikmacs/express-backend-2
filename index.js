import express from 'express';
import parser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import graphQLHTTP from 'express-graphql';

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
  const token = createToken(req.body.username, req.body.password)
    .then(token => {
      res.status(201).json({ token });
    })
    .catch(() => {
      res.status(403).json({ message: 'Login Failed' });
    });
});

app.listen(PORT, () => console.log(`Server on ${PORT}`));
