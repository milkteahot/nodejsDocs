//객체의 메서드 호출할 때 this 바인딩
var myObject = {
    name: 'foo',
    sayName: function(){
        console.log(this.name);
    }
};

var otherObject = {
    name: 'bar'
};

otherObject.sayName = myObject.sayName;

//myObject 객체에서 호출됐으므로, 이 메서드에서 사용된 this는 myObject객체를 가리킨다.
myObject.sayName();
otherObject.sayName();