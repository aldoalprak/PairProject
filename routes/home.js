const fs = require('fs');
var express = require('express')
var router = express()
const Model = require('./../models');


router.get('/',function(req,res){
res.render('home')
})

router.post('/',function(req,res){
  let loginName = req.body.username
  let loginPassword = req.body.password
Model.customer.findAll({
  where:{
    name:loginName,
    password:loginPassword

  }
})
.then(function(){
  res.redirect('/packets')
})
})

router.get('/register',function(req,res){
  res.render('registerForm')
})

router.post('/register',function(req,res){
  // console.log('=======>',req.body)
  Model.customer.create({

    name: req.body.name,
    username: req.body.username,
    password:req.body.password,
    tinggi_badan :req.body.tinggi_badan,
    berat_badan:req.body.berat_badan,
    gender:req.body.gender,
    level_activity:req.body.level_activity,
    age:req.body.age
  })
  .then(function(){
    res.redirect('/customer')
  })
})





module.exports = router
