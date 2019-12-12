# HTTP transaction 해부

## 서버생성
+ createServer 이용
+ createServer 가 반환한 server 객체는 EventEmitter 이다. 서버 객체를 생성하고 리스너를 추가한 축약 문법.

## 메서드, url, 헤더
+ 요청을 처리할 때 메서드와 url을 확인한 후 작업 실행. 

## 요청 바디
+ 핸들러에 전달된 request 객체는 ReadableStream 인터페이스를 구현한다. 이 스트림에 이벤트 리스너를 등록하거나 다른 스트림에 파이프로 연결할 수 있다. 스트림의 'data'와 'end' 이벤트에 이벤트 리스너를 등록해서 데이터를 받는다. put/post

## 오류설명

## 지금까지의 코드

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

## http 상태 코드

## 응답 헤더 설정



