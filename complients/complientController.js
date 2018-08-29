var complientModel = require('./complientModel');

var createComplient = function(req, res) {
    var complient = new complientModel(req.body);
    complient.save(function(err, result) {
        data = {
            message: "Your request created"
        }
        if (err) return res.status(400).send('cannot create complient');
        else return res.status(200).send(data)

    })
};
var getAllComplients = function(req, res) {
    complientModel.find(function(err, result) {
        if (err) return res.status(400).send('cannot get requests');
        else return res.status(200).send(result);
    })
}

module.exports = {
    createComplient: createComplient,
    getAllComplients: getAllComplients

}