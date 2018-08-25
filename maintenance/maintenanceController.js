var maintenanceModel = require('./maintenanceModel');

var createMaintenance = function(req, res) {
    var maintenance = new maintenanceModel(req.body);
    maintenance.save(function(err, result) {
        if (err) return res.status(400).send('cannot create maintenace');
        else return res.status(200).send('created maintenance');
        console.log(result);
    })
}
var getAllMaintenance = function(req, res) {
    maintenanceModel.find(function(err, result) {
        if (err) return res.status(400).send('cannot find the maintenance');
        else return res.status(200).send(result);
    })
}

module.exports = {
    createMaintenance: createMaintenance,
    getAllMaintenance: getAllMaintenance
}