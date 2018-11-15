var express = require('express');

var complientRouting = express.Router();

var complientController = require('./complientController');

complientRouting.route('/createComplient').post(complientController.createComplient);
complientRouting.route('/getAllComplients').get(complientController.getAllComplients);
complientRouting.route('/delComplaint').get(complientController.deleteComplaint);

module.exports = complientRouting;