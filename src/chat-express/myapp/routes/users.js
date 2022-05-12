var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const Users =require('../models/users')
const bcrypt =require('bcrypt')
const jwt =require('jsonwebtoken')

/* GET All Users */
router.get('/',function(req,res,next){
  Users.find(function(users,err){
    if(err) return res.json(err)
    res.json(users)
  })
})

// Register User

router.post('/register',function(req,res,next){
  const body=req.body
  const user=new Users(body)
  bcrypt.genSalt()
  .then((salt)=>{
    bcrypt.hash(user.password,salt)
    .then((encrypted)=>{
      user.password=encrypted
      user.save()
      .then((user)=>{
        res.json(user)
      })
      .catch((err)=>{
        res.json(err)
      })
    })
  })
})



const userController=((req,res)=>{
  const body=req.body
  Users.findOne({email:body.email})
  .then((user)=>{
      if(!user){
          res.json({
              errors:'invalid Email or password'
          })

      }
      bcrypt.compare(body.password,user.password) 
      .then((match)=>{
          if(match){
              const tokenData={
                  _id:user._id,
                  email:user.email,
                  username:user.username,
                  nickname:user.nickname
              }
             const token= jwt.sign(tokenData,'token',{expiresIn:'1d'})

              res.json({
                  token:`${token}`
              })
          }else{
              res.json({errors:'invalid email or password'})
          }
      })       

  })
})

router.post('/login',userController)
  
module.exports = router;
