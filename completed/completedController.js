var acceptCompletedModel = require('./completedModel');

var createCompleted = function(req, res) {
    var newNotify = new acceptCompletedModel(req.body);
    newNotify.save(function(err, result) {
        if (err) res.send({ message: "cannot created" });
        else res.send(result)
    });
}

var getAllCompleted = function(req, res) {
    acceptCompletedModel.find(function(err, result) {
        if (err) return res.status(400).send('cannot find the completed request');
        else return res.status(200).send(result);
    })
}

var findTheCompleted = function(req, res) {
    var uid = req.body.uid;

    acceptCompletedModel.find({ uid }, function(err, result) {
        console.log(result);
        if (err) res.send({ message: "cannot find" });
        else return res.send(result)
    })
}

var deleteCompleted = function(req,res){
    var _id = req.body._id;
    acceptCompletedModel.findByIdAndRemove({_id},function(err,notification){
        if(!err){
            res.status(204);
            res.send("Removed");
        }else{res.send("Deleted Faild")}
    });
}

module.exports = {
    createCompleted: createCompleted,
    getAllCompleted:getAllCompleted,
    findTheCompleted: findTheCompleted,
    deleteCompleted:deleteCompleted
  
}