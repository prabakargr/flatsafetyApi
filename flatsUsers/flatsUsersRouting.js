var express = require('express');

var flatUserRouting = express.Router();

var flatUserController = require('./flatUsersController');

flatUserRouting.route('/createProfile').post(flatUserController.createProfile);


module.exports = flatUserRouting;