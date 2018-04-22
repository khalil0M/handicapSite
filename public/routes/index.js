var router = require('express').Router();
var controller = require('../controllers');

router.get('/',(req,res)=>{
//  res.send('homepage');
controller.homepage(req,res);
});

router.get('/home',(req,res)=>{
//  res.send('homepage');
controller.homepage(req,res);
});

router.get('/contact',(req,res)=>{
  controller.contact(req,res);
});
router.get('/about',(req,res)=>{
  controller.about(req,res);
});

router.get('/team',(req,res)=>{
  controller.team(req,res);
});

router.get('/ourEstablishment',(req,res)=>{
  controller.ourEstablishment(req,res);
});

router.get('/organizations',(req,res)=>{
  controller.organizations(req,res);
});

module.exports=router;
