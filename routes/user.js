var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.send('got to GET /wiki/');
  next();
});

router.get('/:index', (req, res, next) => {
  res.send(req.params.index);
  next();
});

router.post('/', (req, res, next) => {
  res.send('got to POST /wiki/');
  next();
});

router.put('/:index', (req,res,next) => {
  res.send('got to PUT /wiki/');
  next();
})

router.delete('/:index', (req,res,next) => {
  res.send('got to PUT /wiki/');
  next();
})

router.get('/add', (req, res, next) => {
  res.send('got to GET /wiki/add');
  next();
});


module.exports = router;
