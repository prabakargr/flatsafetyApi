var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var acceptNotifyModel = new Schema({
    uid: String,
    department: String,
    message: String,
    acceptedDateTime: String,
    employeeId: String,
    employeeName: String
});

module.exports = mongoose.model('acceptedNotification', acceptNotifyModel)