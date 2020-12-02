//arguments 객체 예제
function add(a,b){
    console.dir(arguments);
    return a+b;
}

console.log(add(1));
console.log(add(1,2));
console.log(add(1,2,3));

//호출된 인자 개수에 상관없이 함수 구현
function sum(){
    var result = 0;
    for(var i=0;i<arguments.length;i++){
        result += arguments[i];
    }
    return result;
}

console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5,6,7,8,9));