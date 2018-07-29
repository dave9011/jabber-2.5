const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./config/config');

console.log('Initializing server');

// Create express application
const app = express();

console.log('Adding middleware');

// Define middleware
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

require('./routes')(app);

// Set callback for when app is ready
app.on('ready', () => {
    app.listen(config.port);

    console.log('Listening on port ' + config.port);
});

// Attempt DB connection
mongoose.connect('mongodb://localhost:27017/myapp',
  {
    useNewUrlParser: true,
  },
  () => {
      console.log('Connected to DB');

      app.emit('ready');
  }
);
