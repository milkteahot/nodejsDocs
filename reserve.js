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

//express 웹서버 생성
var app = express();

//예약현황화면 연결
app.get('/', function(req,res,next) {
    fs.readFile('reservePage.html', function(err,data){
        res.send(data.toString());
    });
});

//좌석현황 정보 전송
app.get('/seats', function(req,res,next){
    console.log('Server Seats Call!');
    res.send(seats);
});

//웹서버 실행
var server = http.createServer(app);
server.listen(8000, function(){
    console.log('Server Running on http:localhost:8000');
});

//소켓서버 실행
var io = socketio.listen(server);
io.sockets.on('connect', function(socket){

    //'reserve'이벤트 
    socket.on('reserve', function(data){
        seats[data.y][data.x] = 2;
        //모든 클라이언트의 'reserver' 이벤트를 호출하여 예약완료된 좌석정보 전달
        io.sockets.emit('reserver', data);
    });
});

