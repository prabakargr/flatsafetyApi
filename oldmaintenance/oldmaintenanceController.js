var oldmaintenanceModel = require('./oldmaintenanceModel');

var createoldMaintenanceReq = function(req, res) {
    var oldmaintenance = new oldmaintenanceModel(req.body);
    oldmaintenance.save(function(err, result) {
        data = {
            message: "Your request created"
        }
        if (err) return res.status(400).send('cannot create maintenace');
        else return res.status(200).send(data)
        console.log(data)
    }) 
};
var getAlloldMaintenanceReqs = function(req, res) {
    oldmaintenanceModel.find(function(err, result) {
        if (err) return res.status(400).send('cannot get requests');
        else return res.status(200).send(result);
    })
}

module.exports = {
    createoldMaintenanceReq: createoldMaintenanceReq,
    getAlloldMaintenanceReqs: getAlloldMaintenanceReqs

}