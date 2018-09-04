var mongoose = require('mongoose')

var Schema = mongoose.Schema

var newUpdateModel = new Schema({
    uid: String,
    name: String,
    age: String,
    address: String,
    contact: String,
    date: String,
    heading: String,
    subject: String,
    newsDetails: String
});

module.exports = mongoose.model('newsUpdate', newUpdateModel);