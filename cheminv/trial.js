var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var path = require('path');
var cookieParser = require('cookie-parser');


var {loginHandler} = require('./callbacks/login');
var {auth} = require('./callbacks/auth');
var {viewHandler} = require('./callbacks/view');
var {searchHandler} = require('./callbacks/search');
var {updateHandler} = require('./callbacks/update');
var {postupdate} = require('./callbacks/postupdate');
//var {addHandler} = require('./callbacks/add');

var app = express();

var db = mysql.createConnection({
  host:'localhost',
  user:'newuser',
  password:'password',
  database:'Pharmacy'
});
global.db = db;

var port = 8090;

app.set('port',port);
app.set('views','./views');
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());



app.get('/login',loginHandler);
app.post('/login',auth);
app.get('/view',viewHandler);
app.post('/view',searchHandler);
app.get('/update/:id',updateHandler);
app.post('/update/:id',postupdate);
//app.get('/add',addHandler);


app.listen(port);
