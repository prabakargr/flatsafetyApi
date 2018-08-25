var mongoose = require('mongoose');

var Schema = mongoose.Schema

var flatUserModel = new Schema({
    name: String,
    category: String,
    block: String,
    floor: String,
    flatno: String,
    contact: String
});

module.exports = mongoose.model('flatsuser', flatUserModel);