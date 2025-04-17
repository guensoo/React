const person = {
  name : "홍길동",
  age : 30,
  greetind : function(){
    console.log(`안녕 나는 ${this.name}이야`);
  },
  sayBye(){
    console.log('잘가라');
  }
}

console.log(person.name);
console.log(person.age);
person.greeting();
person.sayBye();

const obj =  new Object();
obj.x = 10;
obj.y = 20;

function User(name,age){
  this.name = name;
  this.age = age;
}

const u1 = new User('Bob', 25);

// 메모리에 square 함수를 올리겠다.
// 매개변수 : 함수 외부와 내부를 연결하는 변수
// 함수를 호출하면서 전달받은 값을 함수 내부로 전달
function square(x){
  let result = x * x;

  return result;
  // return이 있어야 함수 밖으로 결과를 빼서 확인할 수 있다.

}

square(3);