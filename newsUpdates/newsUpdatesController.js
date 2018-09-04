var newUpdateModel = require('./newsUpdateModel');

var createNews = function(req, res) {
    newsupdate = new newUpdateModel(req.body);
    newsupdate.save(function(err, result) {
        if (err) res.send('cannot create');
        else res.send(result);
    })
}

var getAllNews = function(req, res) {
    newUpdateModel.find(function(err, result) {
        if (err) res.send('cannot find news');
        else res.send(result);
    })
}

module.exports = {
    createNews: createNews,
    getAllNews: getAllNews
}