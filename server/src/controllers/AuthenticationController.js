const {User} = require('../models');

module.exports = {
  async register (request, response) {
    const {email, password} = request.body;

    try {
      // 1. Attempt to find a user with the given email
      const user = await User.findOne({
        email: email,
      });

      // 2. If one was found, we error out b/c the email is already is registered
      if (user) {
        response.status(400).send({
          error: 'This user has already been registered!',
        });

        return;
      }

      // 3. Create the new user
      const newUser = await User.create({
        email: email,
        password: password, // TODO: hash password
      });

      response.send({
        message: 'You user was registered!',
        user: newUser,
      });
    } catch (err) {
      console.log(err);

      response.status(400).send({
        error: err.message,
      });
    }
  },
  async login (request, response) {
    const {email, password} = request.body;

    try {
      const user = await User.findOne({
        email: email,
      });

      // Return an error if the user was not found
      if (!user || user.password !== password) {
        response.status(403).send({
          error: 'The login information was incorrect!',
        });

        return;
      }

      response.send({
        user,
      });
    } catch (err) {
      response.status(400).send({
        error: err.message,
      });
    }
  },
};
