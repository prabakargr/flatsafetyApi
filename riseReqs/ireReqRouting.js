var express = require('express');

var riseReqRouting = express.Router();

var riseReqController = require('./riseReqController');

riseReqRouting.route('/createRiseReq').post(riseReqController.createRiseReq);
riseReqRouting.route('/getAllRiseReqs').get(riseReqController.getAllRiseReqs);

module.exports = riseReqRouting;