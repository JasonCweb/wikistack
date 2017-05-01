var wikiRouter = require('../wiki.js');
var userRouter = require('../user.js');

var express = require('express');
var router = express.Router();

router.use('/wiki', wikiRouter);
router.use('/user', userRouter);

module.exports = router;
