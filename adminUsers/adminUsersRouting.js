var express = require('express');

var adminUsersRouting = express.Router();

var adminUsersController = require('./adminUsersController');

adminUsersRouting.route('/createAdmin').post(adminUsersController.createAdminUser);


module.exports = adminUsersRouting;