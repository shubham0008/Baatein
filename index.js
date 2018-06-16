var express =require('express');
var socket = require('socket.io');
var http = require('http').Server(app);
var mongoose = require('mongoose');

//App Setup
var numUsers = 0;
var app = express();
app.set('port', (process.env.PORT || 3000));
var server = app.listen(app.get('port'),function () {
    console.log("Server Working");
})

//static
app.use(express.static('public'));


//Socket Setup
var io = socket(server);

io.on('connection',function (socket) {
    console.log('made socket connection',socket.id);


 socket.on('add user',function (username) {
     if (addedUser) return;
     socket.username=username;
     ++numUsers;
     addedUser = true;

     socket.emit('login',{numUsers :numUsers});


 })

socket.on('chat',function (data) {
    io.sockets.emit('chat',data);

});
socket.on('typing',function (data) {
    socket.broadcast.emit('typing',data);

});



});