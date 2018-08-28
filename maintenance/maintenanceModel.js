var mongoose = require('mongoose');

var Schema = mongoose.Schema

var maintenanceModel = new Schema({
    maintenancecategory: String,
    section: String,
    remarks: String,
    uid: String,
    name: String,
    homecategory: String,
    block: String,
    floor: String,
    flatno: String,
    contact: String
})

module.exports = mongoose.model('maintenace', maintenanceModel);