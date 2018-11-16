var express = require('express');

var oldComplaintRouting = express.Router();

var complaintoldReqController = require('./oldcomplaintController');

oldComplaintRouting.route('/oldComp').post(complaintoldReqController.createoldComReq);
oldComplaintRouting.route('/getOldComp').get(complaintoldReqController.getAlloldComReqs);

module.exports = oldComplaintRouting;