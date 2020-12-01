//add함수도 객체처럼 프로퍼티를 가질 수 있다
function add(x,y){
    return x+y;
}

add.result = add(3,2);
add.status = 'OK';

//1) 변수나 프로퍼티의 값으로 할당
var foo = 100;
var bar = function (){
    return 100;
};
// console.log(bar()); //100

var obj = {};
obj.baz = function(){
    return 200;
}
// console.log(obj.baz()); //200

//2) 함수 인자로 전달
var foo = function(func){
    func();
};

foo(function(){
    // console.log('Function');
});

//3) 리턴값으로 활용
var foo = function(){
    return function(){
        // console.log('this function is the return value.');
    };
};

var bar = foo();
bar();

//함수 객체의 기본 프로퍼티
function add(x,y){
    return x+y;
}

console.dir(add);
// console.log(add.length, 'length');
// console.log(add.prototype, 'prototype');

//함수 객체의 length 프로퍼티
function func0() {

}

function func1(x) {
    return x;
}

function func2(x,y) {
    return x+y;
}

function func3(x,y,z) {
    return x+y+z;
}

// console.log(func0.length, func1.length, func2.length, func3.length);

//함수 객체와 프로토타입 객체와의 관계
function myFunction(){
    return console.log('hello');
}

console.log(myFunction.prototype);
console.log(myFunction.prototype.constructor);

