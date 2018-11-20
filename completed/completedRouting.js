var express = require('express');

var completedRouting = express.Router();

var completedController = require('./completedController');

completedRouting.route('/completedAccept').post(completedController.createCompleted);
completedRouting.route('/completedNotifications').post(completedController.findTheCompleted);
completedRouting.route('/removeCompleted').post(completedController.deleteCompleted)

module.exports = completedRouting;