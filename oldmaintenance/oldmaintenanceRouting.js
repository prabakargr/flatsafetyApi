var express = require('express');

var oldmaintenanceRouting = express.Router();

var oldmaintenanceController = require('./oldmaintenanceController');

oldmaintenanceRouting.route('/oldmaintenance').post(oldmaintenanceController.createoldMaintenanceReq);
oldmaintenanceRouting.route('/getOldmaintenance').get(oldmaintenanceController.getAlloldMaintenanceReqs);

module.exports = oldmaintenanceRouting;