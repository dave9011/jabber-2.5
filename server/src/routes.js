const AuthenticationController = require('./controllers/AuthenticationController');

module.exports = (app, models) => {
  app.post('/register', AuthenticationController.register);
};
