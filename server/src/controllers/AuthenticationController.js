const {User} = require('../models');

module.exports = {
  async register (request, response) {
    const body = request.body;

    let error;
    let user;

    // 1. Attempt to find a user with the given email
    try {
      error, user = await User.findOne({
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

      return;
    }

    try {
      error, user = await User.create({
        email: body.email,
        // TODO: hash password
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
  },
};
