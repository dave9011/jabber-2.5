const mongoose = require('mongoose');

const models = {};

const userModel = require('./User/user.model');

models[userModel.NAME] = userModel.init(mongoose);

module.exports = models;
