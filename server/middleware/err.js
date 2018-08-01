module.exports = function(err, req, res, next){
  console.log('ERROR: ' + err.message);
  res.status(500).send();
}
