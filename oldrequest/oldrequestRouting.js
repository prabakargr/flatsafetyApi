var express = require('express');

var oldriseReqRouting = express.Router();

var riseoldReqController = require('./oldrequestController');

oldriseReqRouting.route('/oldRiseReq').post(riseoldReqController.createoldRiseReq);
oldriseReqRouting.route('/getOldRiseReqs').get(riseoldReqController.getAlloldRiseReqs);

module.exports = oldriseReqRouting;