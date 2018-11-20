var express = require('express');

var acceptCompletedRouting = express.Router();

var acceptCompletedController = require('./completedController');

acceptCompletedRouting.route('/completedAccept').post(acceptCompletedController.createCompleted);
acceptCompletedRouting.route('/completedNotifications').post(acceptCompletedController.findTheCompleted);
acceptCompletedRouting.route('/delCompleted').post(acceptCompletedController.deleteCompleted);


module.exports = acceptCompletedRouting;