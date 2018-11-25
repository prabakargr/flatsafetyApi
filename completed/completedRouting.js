var express = require('express');

var acceptCompletedRouting = express.Router();

var acceptCompletedController = require('./completedController');

acceptCompletedRouting.route('/completedAccepted').post(acceptCompletedController.createCompleted);
acceptCompletedRouting.route('/completedNotifications').post(acceptCompletedController.findTheCompleted);
acceptCompletedRouting.route('/deletedCompleted').post(acceptCompletedController.deleteCompleted);
acceptCompletedRouting.route('/getcompleted').get(acceptCompletedController.getAllCompleted);


module.exports = acceptCompletedRouting;