//to reset github
//git reset --hard user_to_pull_from/master

var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var models = require('./models/index');
var routerIndex = require('./routes');

// point nunjucks to the directory containing templates and turn off caching; configure returns an Environment
// instance, which we'll want to use to add Markdown support later.
var env = nunjucks.configure('views', {noCache: true});
// have res.render work with html files

app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);
app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests

app.use('/', routerIndex);

app.use(express.static("public"));

models.db.sync({force: true})
.then(() => {
  app.listen(8080, function() {
    console.log('Server is up');
  });
})
.catch(console.error);
