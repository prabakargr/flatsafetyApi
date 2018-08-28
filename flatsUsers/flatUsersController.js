var flatsUsersModel = require('./flatUsersModel');

var createProfile = function(req, res) {
    var flatuser = new flatsUsersModel(req.body);
    console.log(flatuser);
    flatuser.save(function(err, result) {
        if (err) return res.status(400).send('cannot create user');
        else return res.status(200).send(result);
    });
}
var findProfile = function(req, res) {
    var uid = req.body.uid;
    flatsUsersModel.findOne({ uid }, function(err, result) {
        var data = {}
        if (err) return res.send(data);
        else return res.send(result);
    })
}

var updateProfile = function(req, res) {
    var uid = req.body.uid;
    var name = req.body.name;
    var homecategory = req.body.homecategory;
    var block = req.body.block;
    var floor = req.body.floor;
    var flatno = req.body.flatno;
    var contact = req.body.contact;
    flatsUsersModel.findOneAndUpdate({ uid }, { name, homecategory, block, floor, flatno, contact },
        function(err, result) {
            if (err) res.send('cannot update');
            else res.send(result);
        })
}

module.exports = {
    createProfile: createProfile,
    findProfile: findProfile,
    updateProfile: updateProfile
}