var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');

// express.static will serve everything
// with in client as a static resource
// also, it will server the index.html on the
// root of that directory on a GET to '/'
app.use(express.static('client'));

// body parser makes it possible to post JSON to the server
// we can accss data we post on as req.body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var lions = [];
var id = 0;

// TODO: make the REST routes to perform CRUD on lions
app.get('/lions', function(req, res){
  if(req.query.name){
    res.json(_.find(lions, {name: req.query.name}));
  } else{
    res.json(lions);
  }
});

app.get('/lions/:id', function(req, res){
  var lion = _.find(lions, {id:parseInt(req.params.id)});
  res.json(lion || {});
});

app.post('/lions', function(req, res){
  var lion = req.body;
  lion.id = id++;
  lions.push(lion);
  res.json(lion);
});

app.put('/lions/:id', function(req, res){
  var newLion = req.body;
  if(newLion.id){
    delete newLion.id;
  }

  var oldLionIndex = _.findIndex(lions, {id: parseInt(req.params.id)});
  if(!lions[oldLionIndex]){
    res.status(404).send('Lion not found!');
  } else{
    newLion = _.assign(lions[oldLionIndex], newLion);
    res.json(newLion);
  }
});

app.delete('/lions/:id', function(req, res){
  var lionIndex = _.findIndex(lions, {id: parseInt(req.params.id)});
  
  if(!lions[lionIndex]){
    res.status(404).send('Lion not found!');
  } else{
    var deletedLion = lions[lionIndex];
    lions.splice(lionIndex, 1);
    res.json(deletedLion);
  }
});

app.listen(3000);
console.log('on port 3000'); /* eslint-disable-line no-console */