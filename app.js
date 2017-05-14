var info = require('./info');
var lang = require("./lang");
var User = require("./User");
var feed = require("feed-read");
var Client = require('node-rest-client').Client;
var fs = require('fs');
var express = require('express');
var app = express();  
var server = require('http').Server(app);  
var io = require('socket.io')(server);
var readLastLines = require("read-last-lines");
var fsTimeout;
var fileContent = [];

app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res) {  
    res.sendFile(__dirname + '/index.html');
    // res.sendFile(__dirname + '/style.css');
});


server.listen(80);

fs.truncate('./autoitlog.txt', 0, function(){console.log('Cleared content of file')});

io.on('connection', function(socket) { 
  console.log("User entered!");
  socket.emit("linesRead", {fromFile: fileContent});
});
var watcher = fs.watch('./autoitlog.txt', {recursive:true});
watcher.on('change', function(evt, name){
  if (!fsTimeout) {

    fs.readFile('./autoitlog.txt', function(err, contents) {
    fileContent = [];
    fileContent = contents.toString().split("\n");
    console.log("happened");
    io.emit("linesRead", {fromFile: fileContent});
});
       
        fsTimeout = setTimeout(function() { fsTimeout=null },100) // give 5 seconds for multiple events
    }
});

watcher.on('error', function(error){
  console.log("ERROR FILE " + error);
});





