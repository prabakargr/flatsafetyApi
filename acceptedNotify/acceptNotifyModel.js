var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var acceptNotifyModel = new Schema({
    uid: String,
    department: String,
    message: String,
    acceptedDateTime: String,
    createdDateTime: String,
    employeeId: String,
    employeeName: String,
    remarks:String
});

module.exports = mongoose.model('acceptedNotification', acceptNotifyModel)