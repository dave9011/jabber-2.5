const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./config/config');

// Set debug mode for now
mongoose.set('debug', true);

console.log('Initializing server');

// Create express application
const app = express();

console.log('Adding middleware');

// Define middleware
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Set callback for when app is ready
app.on('ready', () => {
  app.listen(config.port);

  console.log('Listening on port ' + config.port);
});

// Attempt DB connection
mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.database}`,
  {
    useNewUrlParser: true,
  },
  (error) => {
    console.log(`Connected to DB: ${config.db.database}`);

    // Initialize models
    const models = require('./models/index');

    require('./routes')(app, models);

    app.emit('ready');
  }
);
