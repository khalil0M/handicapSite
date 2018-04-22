var postContr =  require('../../post/utilities');

function profile(req,res){
//  res.send('homapage test');
//res.render('profile',{posts:posts,user:user});
postContr.getPosts(req,res);
//res.render('profile',{user:req.session.user,posts:req.session.posts});
}

module.exports.profile=profile;
