var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var adminUsersModel = new Schema({
    uid: String,
    name: String,
    age: String,
    address: String,
    contact: String
});

module.exports = mongoose.model('adminuser', adminUsersModel);