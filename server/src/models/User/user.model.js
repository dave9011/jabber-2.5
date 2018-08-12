const schema = require('./user.schema');

module.exports = {
  NAME: 'User',
  init: function (mongoose) {
    return mongoose.model(this.NAME, new mongoose.Schema(schema));
  },
};
