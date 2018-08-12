module.exports = {
  email: {
    type: String,
    unique: true,
    index: true,
  },
  password: String,
  username: {
    type: String,
  },
};
