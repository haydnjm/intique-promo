const keys = require('./config/keys');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { NODE_ENV } = process.env;

const app = express();

app.use(bodyParser.json());

mongoose.connect(keys.mlabURI);

const db = mongoose.connection;
db.on('error', console.error.bind('connection error:'));
db.once('open', () => {
  console.log('H database connected');
});

require('./routes/survey')(app);

if (NODE_ENV === 'production') {
  // Express will serve up production assets
  app.use(express.static('client/build'));
  console.log('production');

  // Express will serve up the index.html file if it doesn't recognise the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });

} else {
  console.log('development');
}

app.listen(8080);
