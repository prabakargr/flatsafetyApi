var newUpdateModel = require('./newsUpdateModel');

var createNews = function(req, res) {
    newsupdate = new newUpdateModel(req.body);
    newsupdate.save(function(err, result) {
        if (err) res.send('cannot create');
        else res.send('news created');
    })
}

module.exports = {
    createNews: createNews,
}