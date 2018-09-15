var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var acceptNotifyModel = new Schema({
    uid: String,
    department: String,
    date: String,
    message: String
});

module.exports = mongoose.model('acceptedNotification', acceptNotifyModel)