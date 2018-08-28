var mongoose = require('mongoose');

var Schema = mongoose.Schema

var flatUserModel = new Schema({
    uid: String,
    name: String,
    homecategory: String,
    block: String,
    floor: String,
    flatno: String,
    contact: String
});

module.exports = mongoose.model('flatsuser', flatUserModel);