var oldcomplientModel = require('./oldcomaplaintModel');

var createoldComReq = function(req, res) {
    var oldcomplient = new oldcomplientModel(req.body);
    oldcomplient.save(function(err, result) {
        data = {
            message: "Your request created"
        }
        if (err) return res.status(400).send('cannot create maintenace');
        else return res.status(200).send(data)
        console.log(data)
    }) 
};
var getAlloldComReqs = function(req, res) {
    oldcomplientModel.find(function(err, result) {
        if (err) return res.status(400).send('cannot get requests');
        else return res.status(200).send(result);
    })
}

module.exports = {
    createoldComReq: createoldComReq,
    getAlloldComReqs: getAlloldComReqs

}