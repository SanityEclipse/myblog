var express = require('express');
var router = express.Router();
var queries = require('../db/queries')

/* GET home page. */
router.get('/', getLandingPage);



function getLandingPage (req, res, next) {
  res.render('index', { title: 'Blog' })
};

module.exports = router;
