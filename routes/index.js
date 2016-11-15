var express = require('express');
var router = express.Router();
var queries = require('../db/queries')

/* GET home page. */
router.get('/', getLandingPage);
router.get('/create', newEntryPage);
router.get('/updateEntry/:id', getSingleEntry)

router.post('/createEntry', createEntry);
router.post('/deleteEntry/:id', deleteEntry);
router.post('/updateEntry/:id', updateEntry);

function getLandingPage (req, res, next) {
  queries.getEntries()
  .then (function(data){
  res.render('index', {title: 'Blog', entries: data});
  })
}

function newEntryPage(req, res, next) {
  res.render('create', {title: 'Blog'});
}

function getSingleEntry (req, res, next){
  queries.getSingleEntry(req.params.id)
  .then(function(data){
  res.render('updateEntry', {title: 'Blog', entry: data });
  })
}

function createEntry(req, res, next) {
  queries.createEntry(req.body)
    .then(function() {
      res.redirect('/');
  })
}

function deleteEntry(req, res, next) {
  queries.deleteEntry(req.params.id)
  .then(function(){
    res.redirect('/');
  })
}

function updateEntry(req, res, next) {
  queries.updateEntry(req.params.id, req.body.title, req.body.content, req.body.date)
  .then(function(){
    res.redirect('/');
  })
}

module.exports = router
