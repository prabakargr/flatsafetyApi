var mongoose = require('mongoose')

var Schema = mongoose.Schema

var newUpdateModel = new Schema({
    date: String,
    heading: String,
    subject: String,
    newsDetails: String
});

module.exports = mongoose.model('newsUpdate', newUpdateModel);