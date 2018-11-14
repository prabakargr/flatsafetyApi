var express = require('express');

var oldriseReqRouting = express.Router();

var riseoldReqController = require('./oldrequestController');

oldriseReqRouting.route('/oldRiseReq').post(riseoldReqController.createRiseReq);
oldriseReqRouting.route('/getOldRiseReqs').get(riseoldReqController.getAllRiseReqs);

module.exports = oldriseReqRouting;