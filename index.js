import express from 'express';
import parser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import graphQLHTTP from 'express-graphql';

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

app.use(
  '/graphql',
  graphQLHTTP((req, res) => ({
    schema,
    graphiql: true,
    pretty: true
  }))
);

app.listen(PORT, () => console.log(`Server on ${PORT}`));
