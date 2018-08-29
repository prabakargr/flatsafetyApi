var riseReqModel = require('./riseReqModel');

var createRiseReq = function(req, res) {
    var riseReq = new riseReqModel(req.body);
    riseReq.save(function(err, result) {
        data = {
            message: "Your request created"
        }
        if (err) return res.status(400).send('cannot create maintenace');
        else return res.status(200).send(data)

    })
};
var getAllRiseReqs = function(req, res) {
    riseReqModel.find(function(err, result) {
        if (err) return res.status(400).send('cannot get requests');
        else return res.status(200).send(result);
    })
}

module.exports = {
    createRiseReq: createRiseReq,
    getAllRiseReqs: getAllRiseReqs

}