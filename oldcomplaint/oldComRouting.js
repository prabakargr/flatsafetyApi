var express = require('express');

var oldComReqRouting = express.Router();

var comoldReqController = require('./oldcomController');

oldComReqRouting.route('/oldCompReq').post(comoldReqController.createoldComReq);
oldComReqRouting.route('/getOldCompReqs').get(comoldReqController.getAlloldComReqs);
oldComReqRouting.route('/deloldcomplaint').post(comoldReqController.deleteComplaint);

module.exports = oldComReqRouting;