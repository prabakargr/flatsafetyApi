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


module.exports = {
    createNotification: createNotification,
    findTheNotification: findTheNotification
}