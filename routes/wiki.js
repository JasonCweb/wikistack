var express = require('express');
var router = express.Router();
var models = require('../models');
var Page = models.Page;
var User = models.User;


router.get('/', (req, res, next) => {
  res.redirect('/');
  // res.send('got to GET /wiki/');
  next();
});

router.post('/', (req, res, next) => {
  // res.send('got to POST /wiki/');

  var page = Page.build({
    title: req.body.title,
    content: req.body.content
  })
  page.save();

  // res.json(req.body);
  res.redirect('/');
  next();
});

router.get('/add', (req, res, next) => {
  res.render('addpage');
  next();
});


module.exports = router;
