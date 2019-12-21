var http = require('http');
var hostname = '127.0.0.1';

var fs = require('fs');

//웹 서버 객체를 만든다.
var server = http.createServer();
var port = 3000;
server.listen(port, function(){
    console.log('웹 서버 시작됨: %d', port);
});

//클라이언트 연결 이벤트 처리
server.on('connection', function(socket){
    var addr = socket.address();
    console.log("클라이언트 접속 %d", addr.address);
})

//클라이언트 요청 이벤트 처리
server.on('request', function(req,res){
    console.log('클라이언트 요청 들어옴');

    var filename = './cat1.jpg';
    fs.readFile(filename, function(err, data){
        res.writeHead(200, {"Content-Type":"image/jpg", "width":"200px"});
        res.write(data);
        res.end();
    });
});