var router = require('express').Router();
var controller = require('../controllers');

/*router.get('/post/:id',(req,res)=>{
//  res.send('homepage');
controller.profile(req,res);
});*/

router.post('/posts',(req,res)=>{
//  res.send('homepage');
controller.posts(req,res);
});

router.post('/posts/add',(req,res)=>{
//  res.send('homepage');
controller.addPost(req,res);
});

module.exports=router;
