/* 클로저 생성 조건

1. 내부함수가 익명함수로 되어 외부함수 반환값으로 사용된다.
2. 내부함수는 외부함수의 실행 환경에서 실행된다.
3. 내부함수에서 사용되는 변수 x는 외부함수의 변수 스코프에 있다.

*/

function outer(){
    var name = `closure`;
    function inner(){
        console.log(name);
    }
    inner();
}
outer();

var name = `Warning`;
function outer(){
    var name = `closure2`;
    return function inner(){
        console.log(name);
    };
}

//callFunc 를 클로저라고 한다. 
var callFunc = outer();
callFunc();

//이처럼 외부함수 호출이 종료되더라도 외부함수의 지역변수 및 스코프 객체의 체인 관계를 유지할 수 있는 구조 = 클로저
//외부 함수에 의해 반환되는 내부함수를 가리킴.
