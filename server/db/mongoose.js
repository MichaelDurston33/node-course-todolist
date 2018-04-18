var mongoose = require('mongoose');


mongoose.Promise = global.Promise;
mongoose.connect(process.ENV.MONGODB_URL || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose}
