//내부 함수
function parent(){
    var a = 100;
    var b = 200;

    function child(){
        var b = 300;
        console.log(a);
        console.log(b);
    }
    child();
}

parent();
// child(); //내부함수는 일반적으로 자신이 정의된 부모 함수 내부에서만 호출 가능. 함수 스코핑 때문.

//함수 스코프 외부에서 내부 함수 호출하기
function parent2(){
    var a = 100;

    var child = function (){
        console.log(a, 'a');
    }
    return child;
}

var inner = parent2();
inner();

//함수를 리턴하는 함수 (자신을 재정의하는 함수 예시)
var self = function(){
    console.log('a');
    return function(){
        console.log('b');
    }
}
self = self();
self();