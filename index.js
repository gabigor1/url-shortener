require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const app = express();
const router = require('./config/routes');
const { dbURI, port } = require('./config/environment');

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) return console.log(err);
    console.log('Mongo is Connected!');
  }
);

app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router)


app.listen(port, () => console.log(`Express is listening on port ${port}`));