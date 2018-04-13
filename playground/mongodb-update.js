//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to Mongodb server')
  }
  console.log('connected to Mongodb server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5ad0b6d9fbb9a4436e8636cd')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5ad0834aa1f1a00d00ff7905")
  }, {
    $set: {
      name: 'Laurence'
    },
    $inc: {
      age: 2
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();

  //findOneAndUpdate(filtr, update, options, callback)
});
