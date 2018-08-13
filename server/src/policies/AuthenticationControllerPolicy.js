const Joi = require('joi');

module.exports = {
  register: (request, response, next) => {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      ),
      username: Joi.string(),
    };

    const {error} = Joi.validate(request.body, schema);

    if (error) {
      let errMsg = null;

      switch (error.details[0].context.key) {
        case 'email':
          errMsg = 'You must provide a valid email address.';
          break;
        case 'password':
          errMsg = 'The password provided was invalid, please send an alphanumeric value between 8 and 32 characters.';
          break;
        default:
          errMsg = 'The password provided was invalid, please send an alphanumeric value between 8 and 32 characters.';
      }

      response.status(400).send({
        error: errMsg,
      });
    } else {
      next();
    }
  },
};
