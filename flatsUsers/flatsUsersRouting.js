var express = require('express');

var flatUserRouting = express.Router();

var flatUserController = require('./flatUsersController');

flatUserRouting.route('/createProfile').post(flatUserController.createProfile);
flatUserRouting.route('/findProfile').post(flatUserController.findProfile);
flatUserRouting.route('/updateProfile').post(flatUserController.updateProfile);


module.exports = flatUserRouting;