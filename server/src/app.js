console.log('Initializing server');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Create express application
const app = express();

console.log('Adding middleware');

// Define middleware
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (request, response) => {
    response.send({
        message: 'You user was registered!',
    });
});

const port = process.env.PORT || 8090;

app.listen(port);

console.log('Listening on port ' + port);


