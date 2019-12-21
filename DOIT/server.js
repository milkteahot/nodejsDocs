var http = require('http');
var server = http.createServer();

var port = 4000;
server.listen(port, function(){
    console.log("서버시작: %d", port);
});

server.on('connection', function(socket){
    var addr = socket.address();
    console.log('클라이언트가 접속: %s, %d', addr.address, addr.port);
});

server.on('request', function(req,res){
    console.log('클라이언트 요청 들어왔다');
});

server.on('close', function(){
    console.log('서버 종료');
});

//쿠키설정
// var router = express.Router();
// router.route('/process/showCookie').get(function(req,res){
// 	console.log('/process/showCookie 호출됨');

// 	res.send(req.cookies);
// });

// router.route('/process/setUserCookie').get(function(req,res){
// 	console.log('/process/setUserCookie 호출됨');

// 	res.cookie('user', {
// 		id: 'mike',
// 		name: 'soso',
// 		authorized: true
// 	});

// 	res.redirect('/process/showCookie');
// });

// app.use('/', router);