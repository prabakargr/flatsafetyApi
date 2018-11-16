var mongoose = require('mongoose')

var Schema = mongoose.Schema

var oldcomplientModel = new Schema({
    complientDetails: String,
    uid: String,
    name: String,
    homecategory: String,
    block: String,
    floor: String,
    flatno: String,
    contact: String,
    createdDateTime: String
});

module.exports = mongoose.model('oldcomplient', oldcomplientModel);