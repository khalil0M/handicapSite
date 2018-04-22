var postContr =  require('../utilities');

function posts(req,res){
//  res.send('homapage test');
  res.render('posts');
}

function addPost(req,res){
    postContr.addPosts(req,res);
}

module.exports.posts=posts;
module.exports.addPost=addPost;
