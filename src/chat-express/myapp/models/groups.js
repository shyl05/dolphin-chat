var mongoose = require('mongoose') 
var Schema = mongoose.Schema;

var GroupSchema = new mongoose.Schema({
  group_name: String,
  created_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Group', GroupSchema);