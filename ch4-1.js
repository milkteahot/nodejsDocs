//함수 선언문 방식
function add(x,y){
    return x+y;
}
const sum = add(3,5);
// console.log(sum)

//함수 표현식 방식
var add = function (x,y){
    return x+y;
};
var plus = add;

//함수 표현식 방식으로 구현한 팩토리얼 함수
var factorialVar = function factorial(n){
    if(n<=1){
        return 1;
    }
    return n*factorial(n-1);
};
console.log(factorialVar(3));
