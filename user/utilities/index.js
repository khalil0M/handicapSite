let User = require('../models/user');

function addUser(req, res) {
    //let User = require('../models/user');
    let user = new User();

    user.local.firstName = req.body.FirstName;
    user.local.lastName = req.body.LastName;
    user.local.username = req.body.Username;
    user.local.password = req.body.Password;

    User.findOne({'local.email' : req.body.Mail}, function(err, present) {
        if (err) throw err;
        if (present) {
            res.send('This email is already used');
        } else {

            user.local.email = req.body.Mail;

            user.save((err, user) => {
                if (err) throw err;
              req.session.user=user;

              res.redirect('/signin');
              console.log(req.body.LastName +' Bien ajouter')
            });
        }
    });
}

function authenticateUser(req, res){

  let login = req.body.login;
  let password = req.body.password;

  User.findOne({'local.username' : login}, function(err, user) {
      if (err) throw err;
      if (user){
       if (user.comparePassword(password)){
            req.session.user=user;
            res.redirect('/profile');
          }
        else{
          console.log("Mauvaise mot de passe");
            res.redirect('/');
        }

      }else{
        console.log("cet utilisateur n'exite pas");
          res.redirect('/');
      }

  });
}

module.exports.addUser = addUser;
module.exports.authenticateUser = authenticateUser;
