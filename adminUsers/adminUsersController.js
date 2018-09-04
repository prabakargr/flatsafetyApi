var adminUsersModel = require('./adminUsersModel');

var createAdminUser = function(req, res) {
    var adminUser = new adminUsersModel(req.body);
    adminUser.save(function(err, result) {
        if (err) res.send('cannot create user');
        else res.send(result)
    })
};

module.exports = {
    createAdminUser: createAdminUser
}