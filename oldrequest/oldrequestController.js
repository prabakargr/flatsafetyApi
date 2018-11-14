var riseoldReqModel = require('./oldrequestModel');

var createoldRiseReq = function(req, res) {
    var riseReq = new riseoldReqModel(req.body);
    riseReq.save(function(err, result) {
        data = {
            message: "Your request created"
        }
        if (err) return res.status(400).send('cannot create maintenace');
        else return res.status(200).send(data)

    })
};
var getAlloldRiseReqs = function(req, res) {
    riseoldReqModel.find(function(err, result) {
        if (err) return res.status(400).send('cannot get requests');
        else return res.status(200).send(result);
    })
}

module.exports = {
    createoldRiseReq: createoldRiseReq,
    getAlloldRiseReqs: getAlloldRiseReqs

}