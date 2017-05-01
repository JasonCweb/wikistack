var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.send('got to GET /wiki/');
  next();
});

router.post('/', (req, res, next) => {
  res.send('got to POST /wiki/');
  next();
});

router.get('/add', (req, res, next) => {
  res.render('addpage');
  next();
});


module.exports = router;
