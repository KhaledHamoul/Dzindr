var express = require('express');
var path = require('path');
var router = require('./routes/routes');

var app = express();
app.use(express.static(path.join(__dirname, 'public')));


// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.use('/', router);

app.listen(3000);
console.log('8080 is the magic port');