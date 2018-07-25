var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var morgan = require('morgan');
var lionRouter = require('./lions');
var tigerRouter = require('./tigers');

app.use(morgan('dev'))
app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/lions', lionRouter);
app.use('/tigers', tigerRouter);

app.use(function(err, req, res, next){ /* eslint-disable-line no-unused-vars */
  if(err){
    console.log(err.message); /* eslint-disable-line no-console */
    res.status(500).send(err);
  }
});

app.listen(3000);
console.log('on port 3000'); /* eslint-disable-line no-console */