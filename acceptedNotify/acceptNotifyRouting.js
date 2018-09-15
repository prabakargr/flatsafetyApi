var express = require('express');

var acceptNotifyRouting = express.Router();

var acceptNotifyController = require('./acceptNotifyController');

acceptNotifyRouting.route('/createNotify').post(acceptNotifyController.createNotification);
acceptNotifyRouting.route('/findNotify').post(acceptNotifyController.findTheNotification);


module.exports = acceptNotifyRouting;