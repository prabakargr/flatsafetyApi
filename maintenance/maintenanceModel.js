var mongoose = require('mongoose');

var Schema = mongoose.Schema

var maintenanceModel = new Schema({
    category: String,
    section: String,
    remarks: String
})

module.exports = mongoose.model('maintenace', maintenanceModel);