var mongoose = require('mongoose') 
var Schema = mongoose.Schema;

var ChatSchema = new mongoose.Schema({
  group : { type: Schema.Types.ObjectId, ref: 'Group' },
  nickname: String,
  message: String,
  created_date: { type: Date, default: Date.now},
});

module.exports = mongoose.model('Chat', ChatSchema);