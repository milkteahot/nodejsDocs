# Nonblocking

## 동시성과 스루풋
+ Nodejs에서 javascript 실행은 싱글 스레드이다.
+ 그러므로 동시성은 다른 작업이 완료된 이후 자바스크립트 콜백함수를 실행하는 이벤트 루프를 의미한다. 
+ 자바스크립트는 코드를 주어진대로 실행하는 온디맨드 환경이고, Web api, event loop, Task queue 와 같은 런타임 환경에서 코드 스케줄링을 관리한다. 


```javascript
const fs = require('fs');
fs.readFile('/file.md', (readFileErr, data)=>{
    if(readFileErr) throw readFileErr;
    console.log(data);
    fs.unlink('/file.md', (unlinkErr)=>{
        if(unlinkErr) throw unlinkErr;
    });
});