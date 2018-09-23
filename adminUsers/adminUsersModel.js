var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var adminUsersModel = new Schema({
    uid: String,
    employeeName: String,
    age: String,
    address: String,
    contact: String,
    employeeId: String
});

module.exports = mongoose.model('adminuser', adminUsersModel);