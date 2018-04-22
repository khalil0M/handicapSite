let Post = require('../models/post');
let mongoose = require('mongoose');

function addPosts(req, res) {
    //let User = require('../models/user');
    let post = new Post();

    post.title = req.body.title;
    post.description = req.body.description;
    post.user = req.session.user;

    Post.findOne({'title' : req.body.title}, function(err, present) {
        if (err) throw err;
        if (present) {
            res.send('This post is already used');
        } else {

            post.save((err, posts) => {
                if (err) throw err;

              res.redirect('/profile');

            });
        }
    });
}

function getPosts(req, res) {

    Post.find({user: mongoose.Types.ObjectId(req.session.user._id)}, function(err, posts) {
        if (err) throw err;
        if (posts) {
            res.render('profile',{user:req.session.user,posts:posts});
        } else {

              console.log("il n'y a aucune poste");
              res.render('profile',{user:req.session.user,posts:[]});
            }
        });
    }


module.exports.addPosts = addPosts;
module.exports.getPosts = getPosts;
