# Event Loop 
* 싱글 스레드 기반으로 작동하는 자바스크립트,
* 이벤트 루프를 기반으로 하는 싱글 스레드 Node.js

- V8엔진 - Call Stack, Task Queue, Heap
- event loop 가 task queue에 들어가는 태스크를 관리

## Call Stack
- 요청을 순차적으로 호출 스택에 담아서 처리한다. 

```javascript
function foo(b){
    var a = 10;
    return a+b;
}

function bar(x){
    var y = 2;
    return foo(x+y);
}

console.log(bar(1));
```

## Heap
- 동적으로 생성된 객체는 힙에 할당된다. '더미'같은 메모리 영역.

## Task Queue
- 태스크들을 임시 저장하는 대기 큐
- 콜스택이 비어있을 때 먼저 대기열에 들어온 순서대로 수행된다.

```javascript
setTimeout(function(){
    console.log("first");
}, 0);
console.log("second"); 

//console>
//second
//first
```

* 핸들러는 콜스택이 아닌, 이벤트큐 영역으로 들어간다. 