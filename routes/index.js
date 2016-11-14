var express = require('express');
var router = express.Router();
var queries = require('../db/queries')

/* GET home page. */
router.get('/', getLandingPage);
router.get('/create', newEntryPage);



function getLandingPage (req, res, next) {
  queries.getEntries()
  .then (function(data){
  res.render('index', {title: 'Blog', entries: data});
  })
}

function newEntryPage(req, res, next) {
  res.render('create', {title: 'Blog'});
}


module.exports = router;
