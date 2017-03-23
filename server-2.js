var express = require('express');
var morgan = require('morgan');
var hostname = 'localhost';
var port = 3000;
var app = express();
app.use(morgan('dev')); // the dev option is to console log the basic information in the sever side method it's status one of middelware used by express 
app.use(express.static(__dirname + '/public')); //the public folder containe all static files that be serves by this server and run this frome anywhere and allows only the get method 
app.listen(port, hostname, function() {
    console.log(`Server running at http://${hostname}:${port}/`);
});