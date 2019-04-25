var fs = require('fs');
var emailv=require("./email.js");

var to="osvaldo@gabssa.net";
var from="alexis@gabssa.net";
var subject="Hola";
var text="Prueba";

var file = fs.readFileSync(__dirname + '/index.html', 'utf8');
file = file.replace('correo', 'alexis@gabssa.net')

var html=file;

emailv.emailf(from, to, subject, text, html);