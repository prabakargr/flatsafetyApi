var complaintoldReqModel = require('./oldComModel');

var createoldComReq = function(req, res) {
    var oldCom = new complaintoldReqModel(req.body);
    oldCom.save(function(err, result) {
        data = {
            message: "Your request created"
        }
        if (err) return res.status(400).send('cannot create maintenace');
        else return res.status(200).send(data)
        console.log(data)
    }) 
};
var getAlloldComReqs = function(req, res) {
    complaintoldReqModel.find(function(err, result) {
        if (err) return res.status(400).send('cannot get requests');
        else return res.status(200).send(result);
    })
}


var deleteComplaint = function(req,res){
    var _id = req.body._id;
    complaintoldReqModel.findByIdAndRemove({_id},function(err,del){
        if(!err){
            res.status(204);
            res.send("Removed");
        }else{res.send("Deleted Faild")}
    });
}

module.exports = {
    createoldComReq: createoldComReq,
    getAlloldComReqs: getAlloldComReqs,
    deleteComplaint:deleteComplaint

}