// Props 복습
// 자식 컴포넌트
const Greeting = (props) => {
  return <h1>안녕하세요, {props.name}님!</h1>
}

// 부모 컴포넌트
const App = () => {
  return <Greeting name = "John"/>
}

// JS는 호이스팅 하는 동적 언어이기 때문에 순서가 상관없다.
// 하지만 const와 let은 함수 표현식이기 때문에
// 선언 전 호출을 하게 되면 오류가 난다.

// =================================

// 구조분해할당
// 객체방식
const person = {
  name: 'John',
  age: 25,
};

// 일반 할당방식
const name = person.name;
const age = person.age;

// 구조분해 할당방식
const {name2, age2} = person;
console.log(name2); // John
console.log(age2); // 25

// 배열방식
const arr = [10, 20, 30];

// 일반 할당방식
const first = arr[0];
const second = arr[1];

// 이렇게 작성해도 된다.
// const info = ['홍길동', 20, 'A'];
// const [name, age, grade] = info;

// console.log(name);  // '홍길동'
// console.log(age);   // 20
// console.log(grade); // 'A'

// 구조분해 할당방식
const {first2, second2} = arr;
console.log(first2); // 10
console.log(second2); // 20

// =================================

// props를 직접 쓰는 방식
const Component = (props) => {
  return <p>{props.name}</p>
};

// 구조분해할당
const MyComponent = ({name}) => {
  return <p>{name}</p>
}

const [count, setCount] = useState(0);