var completedModel = require('./completedModel');

var createCompleted = function(req, res) {
    var newCompleted = new completedModel(req.body);
    newCompleted.save(function(err, result) {
        if (err) res.send({ message: "cannot created" });
        else res.send(result)
    });
}

var findTheCompleted = function(req, res) {
    var uid = req.body.uid;

    completedModel.find({ uid }, function(err, result) {
        if (err) res.send({ message: "cannot find" });
        else res.send(result)
    })
}

var deleteCompleted = function(req,res){
    var _id = req.body._id;
    completedModel.findByIdAndRemove({_id},function(err,notification){
        if(!err){
            res.status(204);
            res.send("Removed");
        }else{res.send("Deleted Faild")}
    });
}

module.exports = {
    createCompleted: createCompleted,
    findTheCompleted: findTheCompleted,
    deleteCompleted:deleteCompleted
}