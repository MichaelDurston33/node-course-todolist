const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


//var id = '5ad3241feb88b2970670afe33';
var id = '5ad0d0f5bb64ee3a03449102'

if (!ObjectID.isValid(id)) {
  console.log('OOO YEAH BABY HORDER');
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todos', todo);
// });

User.findById('5ad0d0f5bb64ee3a03449102').then((user) => {
  if (!user) {
    return console.log('ERROR WANKER');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
