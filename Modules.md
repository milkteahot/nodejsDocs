//Cycles

```javascript
//a.js
console.log('a starting');
exports.done = false;
const b = require('./b.js');
console.log('in a, b.done = %j', b.done);
exports.done = true;
console.log('a done');
```

```javascript
//b.js
console.log('b starting');
exports.done = false;
const a = require('./a.js');
console.log('in b, a.done = %j', a.done);
exports.done = true;
console.log('b done');
```

```javascript
//main.js
console.log('main starting');
const a = require('./a.js');
const b = require('./b.js');
console.log('in main, a.done = %j, b.done = %j', a.done, b.done);
```

+ result
a starting
b starting
in b, a.done = false
b done
in a, b.done = true
a done
in main, a.done = true, b.done = true

+ main.js->a.js->b.js 순서로 로드가 되고, b.js->a.js 를 로드하려고 한다. 이 때 무한루프를 막기 위해서, a.js의 exports object의 unfinished copy가 b.js 모듈에 반환된다. b.js가 로딩을 끝내고, exports object가 a.js 모듈에 제공된다.