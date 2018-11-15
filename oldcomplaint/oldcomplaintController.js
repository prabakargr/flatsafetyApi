var oldcomplaintModel = require('./oldcomplaintModel');

var createoldComplaint = function(req, res) {
    var oldcomplaint = new oldcomplaintModel(req.body);
    oldcomplaint.save(function(err, result) {
        data = {
            message: "Your request created"
        }
        if (err) return res.status(400).send('cannot create complaint');
        else return res.status(200).send(data)
        console.log(data)
    }) 
};
var getAlloldComplaint = function(req, res) {
    oldcomplaintModel.find(function(err, result) {
        if (err) return res.status(400).send('cannot get complaint');
        else return res.status(200).send(result);
    })
}

module.exports = {
    createoldComplaint: createoldComplaint,
    getAlloldComplaint: getAlloldComplaint

}