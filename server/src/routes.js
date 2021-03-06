const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const AuthenticationController = require('./controllers/AuthenticationController');

module.exports = (app, models) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  );

  app.post('/login',
    AuthenticationController.login
  );
};
