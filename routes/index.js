var express = require('express');
var router = express.Router();
var queries = require('../db/queries')

/* GET home page. */
router.get('/', getLandingPage);
router.get('/create', newEntryPage);

router.post('/createEntry', createEntry);
router.post('/deleteEntry/:id', deleteEntry);

router.put('/:id', updateEntry); 


function getLandingPage (req, res, next) {
  queries.getEntries()
  .then (function(data){
  res.render('index', {title: 'Blog', entries: data});
  })
}

function newEntryPage(req, res, next) {
  res.render('create', {title: 'Blog'});
}

function createEntry(req, res, next) {
  queries.createEntry(req.body)
    .then (res.redirect('/'))
}

function deleteEntry(req, res, next) {
  queries.deleteEntry(req.params.id)
  .then(res.redirect('/'))
}

function updateEntry(req, res, next) {
  queries.updateEntry(req.body)
  .then(res.redirect('/'))
}

module.exports = router;
