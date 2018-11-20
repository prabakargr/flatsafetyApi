var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var acceptCompletedModel = new Schema({
    uid: String,
    department: String,
    message: String,
    acceptedDateTime: String,
    createdDateTime: String,
    employeeId: String,
    employeeName: String,
    remarks:String,
    customerMessage:String,
    completedDateTime:String
});

module.exports = mongoose.model('completed',acceptCompletedModel)