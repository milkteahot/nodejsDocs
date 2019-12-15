# HTTP transaction 해부

## 서버생성
+ createServer 이용
+ createServer 가 반환한 server 객체는 EventEmitter 이다. 서버 객체를 생성하고 리스너를 추가한 축약 문법.

## 메서드, url, 헤더
+ 요청을 처리할 때 메서드와 url을 확인한 후 작업 실행. 

## 요청 바디
+ 핸들러에 전달된 request 객체는 ReadableStream 인터페이스를 구현한다. 이 스트림에 이벤트 리스너를 등록하거나 다른 스트림에 파이프로 연결할 수 있다. 스트림의 'data'와 'end' 이벤트에 이벤트 리스너를 등록해서 데이터를 받는다. put/post

## 오류설명
+ request 객체가 ReadableStream 이므로 EventEmitter 이며 오류발생시 EventEmitter 처럼 동작한다. 

## 지금까지의 코드
+ 요청을 받을 수 있지만, 요청에 응답하지는 않는 코드. 웹 브라우저에서 이 예제 접근하면, 클라이언트에 돌려보내는 것이 없으므로 요청이 타임아웃에 걸린다.
+ 이 객체는 ServerResponse 의 인스턴스이면서 WritableStream 이다. 


```javascript
const http = require('http');
http.createServer((request, response)=> {
    const { headers, method, url } = request;
    let body = [];
    request.on('error', (err)=> {
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk);
    }).on('end', ()=> {
        body = Buffer.concat(body).toString();
        // 헤더, 메서드, url, 바디를 가지게 되었다.
        // 이 요청에 응답하는 데 필요한 일을 할 수 있다.
    });
}).listen(8080); // 이 서버를 활성화하고 8080 포트로 받는다.
```

## http 상태 코드
```javascript
response.statusCode = 404;
```

## 응답 헤더 설정
```javascript
response.setHeader('Content-Type', 'application/json');
response.setHeader('X-Powered-By', 'bacon');
```

## 응답 바디 전송
```javascript
response.write('<html>');
response.write('<body>');
response.end();
```
```javascript
response.end('<html><body><h1>Hello, world!</h1></body></html>');
```

## 지금까지의 코드 (요청+응답)
```javascript
const http = require('http');

http.createServer((request, response)=> {
    const { headers, method, url } = request;
    let body = [];
    request.on('error', (err)=> {
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk);
    }).on('end', ()=> {
        body = Buffer.concat(body).toString();
        // 헤더, 메서드, url, 바디를 가지게 되었다.
        // 이 요청에 응답하는 데 필요한 일을 할 수 있다.

        response.on('error', (err) => {
            console.log(err);
        });

        response.writeHead(200, {'Content-Type' : 'application/json'})
        
        response.end(JSON.stringify(responseBody));
        
    });
}).listen(8080); // 이 서버를 활성화하고 8080 포트로 받는다.
```

## 에코 서버
+ 요청받은 데이터를 그대로 응답으로 돌려보낸다.
```javascript
const http = require('http');

http.createServer((request, response)=>{
    let body = [];
    request.on('data', (chunk)=>{
        body.push(chunk);
    }).on('end', ()=>{
        body = Buffer.concat(body).toString();
        response.end(body);
    });
}).listen(8080);
```
+ 변경
```javascript
const http = require('http');

http.createServer((request, response)=>{
    if(request.method == 'POST' && request.url == '/echo'){
        let body = [];
        request.on('data', (chunk)=>{
            body.push(chunk);
        }).on('end', ()=>{
            body = Buffer.concat(body).toString();
            response.end(body);
        });
    } else {
        response.statusCode = 404;
        response.end();
    }
}).listen(8080);
```

+ 간략화 : request 객체는 ReadableStream, response 객체는 WritableStream 이다. 따라서 데이터를 한 스트림에서 다른 스트림으로 직접 연결하는 pipe 를 사용할 수 있다.

```javascript
const http = require('http');

http.createServer((request, response)=>{
    if(request.method == 'POST' && request.url == '/echo'){
        request.pipe(response);
    } else {
        response.statusCode = 404;
        response.end();
    }
}).listen(8080);
```

+ stdout 에 오류를 로깅

```javascript
const http = require('http');

http.createServer((request, response)=>{
    request.on('error', (err) => {
        console.error(err);
        response.statusCode = 400;
        response.end();
    });
    response.on('error', (err)=>{
        console.error(err);
    });

    if(request.method == 'POST' && request.url == '/echo'){
        request.pipe(response);
    } else {
        response.statusCode = 404;
        response.end();
    }
}).listen(8080);
```


+ 이제 할 수 있는 것
* 요청 핸들러 함수로 HTTP 서버의 인스턴스를 생성하고 특정 포트로 서버를 열 수 있습니다.
* request 객체에서 헤더, URL, 메서드, 바디 데이터를 가져올 수 있습니다.
* URL이나 request 객체의 데이터에 기반을 둬서 라우팅을 할 수 있습니다.
* response 객체로 헤더, HTTP 상태 코드, 바디 데이터를 보낼 수 있습니다.
* request 객체에서 response 객체로 데이터를 파이프로 연결할 수 있습니다.
* request와 response 스트림 모두에서 스트림 오류를 처리할 수 있습니다.

+ 출처: https://nodejs.org/ko/docs/guides/anatomy-of-an-http-transaction/