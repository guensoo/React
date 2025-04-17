// 배열(Array)
// 비어있는 배열 만드는법
let arr = new Array(3); //-> 어떤 데이터가 들어올지 타입 정하기X
//index가 존재함
arr[0] = 10;
arr[1] = 3.14;
arr[2] = '홍길동'
// `` -> 백틱 
//${} -> 보간 표현식 백틱으로 감싼 문자열 내부에서 자바스크립트 표현식(변수,식, 함수 호출 등)의 결과를 문자열에 삽입한다.
console.log(`arr[3] : ${arr[3]}`) //없는 인덱스를 사용하면 방을 늘려버린다

// 자바스크립트 배열은 타입의 제약이 없다.
// 서로 다른 타입을 섞어도 무방하다
let m_arr = [
    10,
    '안녕',
    3.14,
    true,
    null,
    undefined,
    {name:'Alice',age:30},
    function(){console.log('hi')}, 
    () => console.log('arrow'),
    [10,20]
];

let student = [{name:'홍길',age:30},{name:'밥',age:50}]

student[0] //-> 객체
student[0].name //-> '홍길'

let fArr = [function(){return '일반함수'}]

//배열에 들어가있는 함수의 호출
console.log(`fArr[0] : ${fArr[0]()}`)

fArr[1] = function(){return '함수 대입하기'}

console.log(`fArr[1] : ${fArr[1]()}`)


let obj = [{name:'홍', greeting: function(){
    return 'hi'
}}]

console.log(obj[0].greeting());



