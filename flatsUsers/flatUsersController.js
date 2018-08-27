var flatsUsersModel = require('./flatUsersModel');

var createProfile = function(req, res) {
    var flatuser = new flatsUsersModel(req.body);
    console.log(flatuser);
    flatuser.save(function(err, result) {
        if (err) return res.status(400).send('cannot create user');
        else return res.status(200).send(result);
    });
}
var findProfile=function(req,res){
    var uid=req.body.uid;
    flatsUsersModel.findOne({uid},function(err,result){
       if(err) return res.send('connot find');
       else return res.send(result);
    })
}

module.exports = {
    createProfile: createProfile,
    findProfile:findProfile
}