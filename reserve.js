var socketio = require('socket.io');
var express = require('express');
var http = require('http');
var fs = require('fs');

//초기값 1: 예약가능, 2: 예약완료, 3: 만료예정
var seats = [
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
];

var app = express();

app.get('/', function(req,res,next) {
    fs.readFile('reservePage.html', function(err,data){
        res.send(data.toString());
    });
});

app.get('/seats', function(req,res,next){
    console.log('Server Seats Call!');
    res.send(seats);
});

var server = http.createServer(app);
server.listen(8000, function(){
    console.log('Server Running on http:localhost:8000');
});

var io = socketio.listen(server);
io.sockets.on('connect', function(socket){

    socket.on('reserve', function(data){
        seats[data.y][data.x] = 2;
        io.sockets.emit('reserver', data);
    });
});

