var router = require('express').Router();
var controller = require('./categoryController');
var auth = require('../../auth/auth');

var checkUser = [auth.decodeToken, auth.getFreshUser];
// setup boilerplate route just to satisfy a request
// for building
router.param('id', controller.params);

router.route('/')
  .get(controller.get)
  .post(checkUser, controller.post);

router.route('/:id')
  .get(controller.getOne)
  .put(checkUser, controller.put)
  .delete(checkUser, controller.delete);

module.exports = router;
