var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

var db = mongoose.connect("mongodb://flatsafe:flat12@ds125422.mlab.com:25422/flatsafety", { useNewUrlParser: true });

var flatUsersRouting = require('./flatsUsers/flatsUsersRouting');
var maintenanceRouting = require('./maintenance/maintenanceRouting');
var riseRequestRouting = require('./riseReqs/ireReqRouting');
var complientRouting = require('./complients/complientRouting');
var newsRouting = require('./newsUpdates/newsUpdateRouting');
var adminUsersRouting = require('./adminUsers/adminUsersRouting');
var acceptNotifyRouting = require('./acceptedNotify/acceptNotifyRouting');
var oldriseReqRouting = require('./oldrequest/oldrequestRouting');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,application/json, Accept,x-access-token");
    next();
});

app.use('/flatUsers', flatUsersRouting);
app.use('/maintenace', maintenanceRouting);
app.use('/riseReqs', riseRequestRouting);
app.use('/complients', complientRouting);
app.use('/news', newsRouting);
app.use('/adminUsers', adminUsersRouting);
app.use('/notification', acceptNotifyRouting);
app.use('/oldrise',oldriseReqRouting)


var port = process.env.PORT || 4000;

app.listen(port, () => console.log('Running on localhost:4000'))