var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todo', { useNewUrlParser: true });

var TodoSchema = new mongoose.Schema({
  name: String,
  completed: Boolean
});

var Todo = mongoose.model('todo', TodoSchema);
Todo.create({
  name: 'clean up your room!!!',
  completed: false
}).then(function(err, todo) {
  console.log(err, todo);
});
