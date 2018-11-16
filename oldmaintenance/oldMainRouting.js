var express = require('express');

var oldMainRouting = express.Router();

var mainOldReqController = require('./oldMainController');

oldMainRouting.route('/oldMainReq').post(mainOldReqController.createoldMainReq);
oldMainRouting.route('/getOldMainReqs').get(mainOldReqController.getAlloldMainReqs);

module.exports = oldMainRouting;