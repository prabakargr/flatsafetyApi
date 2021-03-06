var mongoose = require('mongoose')

var Schema = mongoose.Schema

var riseReqModel = new Schema({
    contactperson: String,
    deliveryname: String,
    contact: String,
    remarks: String,
    uid: String,
    name: String,
    homecategory: String,
    block: String,
    floor: String,
    flatno: String,
    deliverycontact: String,
    createdDateTime: String
});

module.exports = mongoose.model('riserRequest', riseReqModel);