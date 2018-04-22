var router = require('express').Router();
var controller = require('../controllers');

router.get('/profile/:id',(req,res)=>{
//  res.send('homepage');
controller.profile(req,res);
});

router.get('/profile',(req,res)=>{
//  res.send('homepage');
controller.profile(req,res);
});

module.exports=router;
