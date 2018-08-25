var flatsUsersModel = require('./flatUsersModel');

var createProfile = function(req, res) {
    var flatuser = new flatsUsersModel(req.body);
    flatuser.save(function(err) {
        if (err) return res.status(400).send('cannot create user');
        else return res.status(200).send('user created');
    });
}

module.exports = {
    createProfile: createProfile,
}