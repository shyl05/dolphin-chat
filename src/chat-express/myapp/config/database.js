//mongoose connection

const configureDB = () =>{
    var mongoose = require('mongoose');
    mongoose.Promise = require('bluebird');
    mongoose.connect('mongodb://localhost:27017/dolphin-chat-app', { promiseLibrary: require('bluebird') })
    .then(() =>  console.log('connection succesful'))
    .catch((err) => console.error(err));
}
module.exports = configureDB