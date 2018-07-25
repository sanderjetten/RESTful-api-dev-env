/* eslint-disable no-console */
var app = require('./server/server');
var opn = require('opn');

app.listen(3000, function(err){
  if(err){
    console.log(err);
  } else{
    opn('http://localhost:' + 3000);
  }
});
console.log('on port 3000'); 