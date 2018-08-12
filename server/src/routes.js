module.exports = (app, models) => {
  app.post('/register', async (request, response) => {
    const body = request.body;

    let error;
    let user;

    // 1. Attempt to find a user with the given email
    try {
      error, user = await models.User.findOne({
        email: body.email,
      });
    } catch (err) {
      console.log(err);

      response.status(400).send({
        error: err.message,
      });
    }

    // 2. If one was found, we error out b/c the email is already is registered
    if (user) {
      response.status(400).send({
        error: 'This user has already been registered!',
      });
    }

    // 3. Attempt to register the user
    try {
      error, user = await models.User.create({
        email: body.email,
        password: body.password,
      });
    } catch (err) {
      console.log(err);

      response.status(400).send({
        error: err.message,
      });
    }

    response.send({
      message: 'You user was registered!',
      user: user,
    });
  });
};
