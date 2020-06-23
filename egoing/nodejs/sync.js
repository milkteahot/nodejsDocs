var fs = require('fs');

/*
console.log('A');
var result = fs.readFile('sample.txt', 'utf8');
console.log(result);
console.log('C');
*/

//비동기는 3번째 인자에 콜백이 있어야 함.
console.log('A');
fs.readFile('../syntax/sample.txt', 'utf8', function(err, result){
    console.log(result);
});
console.log('C');
// A -> C -> B