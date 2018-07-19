var express = require('express');
var path = require('path');

var app = express();
var jsonData = {count: 12, message: 'hey'};
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'index.html'), function(err){
    if(err){
      res.status(500).send(err);
    }
  });
});

app.get('/data', function(req, res){
  res.send(jsonData);
});

app.listen(port, function(){
  console.log(`listening on http://localhost:${port}`); /* eslint-disable-line no-console */
});