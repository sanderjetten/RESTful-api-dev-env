module.exports = function(err, req, res, next){
  console.log('ERROR: ' + err.message); /*eslint-disable-line no-console */
  res.status(500).send();
}
