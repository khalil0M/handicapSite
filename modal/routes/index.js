var router = require('express').Router();
var controller = require('../controllers');

router.get('/formUser',(req,res)=>{
//  res.send('homepage');
controller.formModal(req,res);
});


module.exports=router;
