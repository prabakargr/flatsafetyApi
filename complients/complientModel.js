var mongoose = require('mongoose')

var Schema = mongoose.Schema

var complientModel = new Schema({
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

module.exports = mongoose.model('complient', complientModel);