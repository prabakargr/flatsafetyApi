var notificationModel = require('./acceptNotifyModel');

var createNotification = function(req, res) {
    var newNotify = new notificationModel(req.body);
    newNotify.save(function(err, result) {
        if (err) res.send({ message: "cannot created" });
        else res.send(result)
    });
}

var findTheNotification = function(req, res) {
    var uid = req.body.uid;

    notificationModel.find({ uid }, function(err, result) {
        if (err) res.send({ message: "cannot find" });
        else res.send(result)
    })
}

var deleteNotification = function(req,res){
    var uid = req.body.uid;
    notificationModel.findByIdAndRemove({_id},function(err,notification){
        if(!err){
            res.status(204);
            res.send("Removed");
        }else{res.send("Deleted Faild")}
    });
}

module.exports = {
    createNotification: createNotification,
    findTheNotification: findTheNotification,
    deleteNotification:deleteNotification
}