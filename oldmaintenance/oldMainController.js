var  oldmaintenanceModel= require('./oldmainModel');

var createoldMainReq = function(req, res) {
    var OldMain = new oldmaintenanceModel(req.body);
    OldMain.save(function(err, result) {
        data = {
            message: "Your request created"
        }
        if (err) return res.status(400).send('cannot create maintenace');
        else return res.status(200).send(data)
        console.log(data)
    }) 
};
var getAlloldMainReqs = function(req, res) {
    oldmaintenanceModel.find(function(err, result) {
        if (err) return res.status(400).send('cannot get requests');
        else return res.status(200).send(result);
    })
}

module.exports = {
    createoldMainReq: createoldMainReq,
    getAlloldMainReqs: getAlloldMainReqs

}