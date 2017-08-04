const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id ='597fa3cfda570f09ac0fc6cc';
// var id = '5984c22442ac8112544ff0a9';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid')
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById(id).then((_user) => {
  if (!_user) {
    return console.log('User not found!!');
  }
  console.log(JSON.stringify(_user, undefined, 2));
}, (e) => {
  console.log(e);
});
