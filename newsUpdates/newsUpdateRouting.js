var express = require('express');

var newsUpdateRouting = express.Router();

var newsController = require('./newsUpdatesController');

newsUpdateRouting.route('/createNews').post(newsController.createNews);
newsUpdateRouting.route('/getAllNews').get(newsController.getAllNews);


module.exports = newsUpdateRouting;