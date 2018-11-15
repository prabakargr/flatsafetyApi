var maintenanceModel = require('./maintenanceModel');

var createMaintenance = function(req, res) {
    var maintenance = new maintenanceModel(req.body);
    maintenance.save(function(err, result) {
        data = {
            message: "Your request created"
        }
        if (err) return res.status(400).send('cannot create maintenace');
        else return res.status(200).send(data);
        console.log(result);
    })
}
var getAllMaintenance = function(req, res) {
    maintenanceModel.find(function(err, result) {
        if (err) return res.status(400).send('cannot find the maintenance');
        else return res.status(200).send(result);
    })
}

var deleteMaintenance = function(req,res){
    var _id = req.body._id;
    maintenanceModel.findByIdAndRemove({_id},function(err,del){
        if(!err){
            res.status(204);
            res.send("Removed");
        }else{res.send("Deleted Faild")}
    });
}

module.exports = {
    createMaintenance: createMaintenance,
    getAllMaintenance: getAllMaintenance,
    deleteMaintenance:deleteMaintenance
}