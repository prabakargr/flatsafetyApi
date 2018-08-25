var express = require('express');

var maintenanceRouting = express.Router();

var maintenanceController = require('./maintenanceController');

maintenanceRouting.route('/createManitenance').post(maintenanceController.createMaintenance);
maintenanceRouting.route('/getAllMaintence').get(maintenanceController.getAllMaintenance);

module.exports = maintenanceRouting;