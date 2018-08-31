var express = require('express');

var newsUpdateRouting = express.Router();

var newsController = require('./newsUpdatesController');

newsUpdateRouting.route('/createNews').post(newsController.createNews);


module.exports = newsUpdateRouting;