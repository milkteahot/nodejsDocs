/*서버에서 직접 쿠리를 만들어서 요청자의 브라우저에 심어주기! */

const http = require('http');

//함수 정의
const parseCookies = (cookie = '') =>
    cookie  
        .split(';')
        .map(v => v.split('='))
        .map(([k, ...vs]) => [k, vs.join('=')])
        .reduce((acc, [k,v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});

http.createServer((req,res) => {
    // req.headers는 요청의 헤더로, 여기에 담긴 쿠키를 분석한다.
    const cookies = parseCookies(req.headers.cookie);
    console.log(req.url, cookies);
    //응답에 헤더를 기록하기 위해서 writeHead 메서드를 사용한다. 두번째 인자가 헤더의 내용이다.
    res.writeHead(200, { 'Set-Cookie' : 'mycookie=test' });
    res.end('Hello Cookie');
})
    .listen(8082, () => {
        console.log('8082번 포트에서 서버 대기중입니다!');
    });