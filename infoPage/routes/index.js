var router = require('express').Router();
var controller = require('../controllers');

router.get('/handicapMoteur',(req,res)=>{
//  res.send('homepage');
controller.handicapMoteur(req,res);
});

router.get('/handicapAuditif',(req,res)=>{
//  res.send('homepage');
controller.handicapAuditif(req,res);
});

router.get('/handicapVisuel',(req,res)=>{
//  res.send('homepage');
controller.handicapVisuel(req,res);
});

router.get('/handicapInvalidantes',(req,res)=>{
//  res.send('homepage');
controller.handicapInvalidantes(req,res);
});

module.exports=router;
