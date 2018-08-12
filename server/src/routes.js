module.exports = (app) => {
  app.post('/register', (request, response) => {
    response.send({
      message: 'You user was registered!',
    });
  });
};
