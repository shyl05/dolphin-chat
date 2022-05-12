var mongoose = require('mongoose') 
const isEmail=require('validator/lib/isEmail')

var UserSchema = new mongoose.Schema({
  email: {
    type:String,
    required:true,
    unique:true,
    validate:{
        validator:function(value){
            return isEmail(value)
        },
        message:function(){
            return 'Invalid Email Format'
        }
    }
  },
  username:{
    type:String,
    required:true,

  },
  nickname:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true,
  },
  created_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Users', UserSchema);