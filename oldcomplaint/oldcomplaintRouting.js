var express = require('express');

var oldcomplaintRouting = express.Router();

var oldcomplaintController = require('./oldcomplaintController');

oldcomplaintRouting.route('/oldcomplaint').post(oldcomplaintController.createoldComplaint);
oldcomplaintRouting.route('/getOldcomplaint').get(oldcomplaintController.getAlloldComplaint);

module.exports = oldcomplaintRouting;