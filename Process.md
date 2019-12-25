```javascript
const server = net.createServer();
server.on('connection', (conn)=> { });

server.listen(8080);
server.on('listening', ()=> { });
```

listen() 이 이벤트 루프 시작부분에서 실행됨.
listening 콜백은 setImmediate() 에 있다.
listening 이벤트 전에 connection 이벤트가 발생하도록 해서 연결받을 가능성이 있다.