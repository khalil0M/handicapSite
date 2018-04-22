function homepage(req,res){
//  res.send('homapage test');
res.render('homepage');
}

function about(req,res){

res.render('about');
}

function team(req,res){

res.render('team');
}

function contact(req,res){
res.render('contact');
}

function ourEstablishment(req,res){
res.render('ourEstablishment');
}


function organizations(req,res){
res.render('organizations');
}

module.exports.homepage=homepage;
module.exports.about=about;
module.exports.team=team;
module.exports.contact=contact;
module.exports.ourEstablishment=ourEstablishment;
module.exports.organizations=organizations;
