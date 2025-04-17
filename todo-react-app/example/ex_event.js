// 이벤트
// 마우스 클릭, 오버, 더블클릭 등등
// 키보드 입력

// 이벤트를 처리하려고 하는 대상을 선택
// document.getElementById(id값)
// id값을 가지고 있는 태그를 선택
// document.querySelector(선택자)
// 태그
// 클래스
// 아이디

// 이벤트의 처리
// 1. 속성에다 주기
// <Button onclick="함수호출">버튼</Button>

// onclick : 눌렀을 때 작동
// onchange : 입력값이 변경되고 포커스를 잃었을 때
// onblur : 그냥 포커스를 잃었을 때
// oninput : 요소가 변경될 때

// 리액트에서는 카멜케이스로 쓴다.

// <button onclick="handleClick()">클릭</button>

// let Button = () => {
  
//   function handleClick(event){

//   }

// }

// <button onClick={handleClick()}>클릭</button>
// 2. 
