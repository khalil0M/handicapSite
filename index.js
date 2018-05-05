var express = require ("express");
let mongoose = require('mongoose');
let path = require('path');
let session = require('express-session');

var app = express();
var cfgServeur = require('./core/config/serveur');
var cfgdatabase = require('./core/config/database');

app.use(session({
  secret : 'my secret sentence',
  resave : true,
  saveUninitialized : true
}));

/*
const firebaseApp = firebase.initializeApp(
functions.config().firebase
);

function getFacts(){
  const ref = firebaseApp.database().ref(facts);
  return ref.once('value').then(snap => snap.val());
}
*/
let dirViews =[
  path.join(__dirname,'./public/views/pages'),
  path.join(__dirname,'./modal/views/pages'),
  path.join(__dirname,'./infoPage/views/pages')
];

app.use(express.static(__dirname + '/resources'));

app.set('views',dirViews);
//ejs moteur pour lancer les pages
app.set('view engine', 'ejs');

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());


let publicRoutes = require('./public/routes');
app.use(publicRoutes);

let modalRoutes = require('./modal/routes');
app.use(modalRoutes);

let infoPageRoutes = require('./infoPage/routes');
app.use(infoPageRoutes);


app.listen(cfgServeur.port);
console.log("Express server running an "+cfgServeur.port);
