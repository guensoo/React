// fetch를 사용하여, 외부 api에서 데이터를 가져와 화면에 렌더링 하는
// 프로그램 만들기

// 외부 api를 호출하여 데이터를 가져온다.(https://jsonplaceholder.typicode.com/users)
// 데이터를 가져오는 동안 로딩 상태를 표시한다.
// api 요청 실패 시, 에러 메시지를 표시해야 한다.
// 가져온 데이터를 화면에 목록 형태로 출력한다.
// 사용자의 이름과 이메일 주소를 출력해주세요.

import { useState, useEffect } from "react";

export const Users = () => {

  // 1. 상태(state) 정의
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. 데이터 가져오기
 useEffect(() => {
  // JSON 데이터 JS로 파싱
  const fetchData = async() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if(!response.ok){
        throw new Error('데이터가 응답하지 않습니다.')
      }
      return response.json();
    })
    .then((data) => {
      setUsers(data);
    })
    .catch((error) => {
      setError(error.message);
    })
    .finally(() => {
      setLoading(false);
    })
    }
    // 함수 선언 종료
    fetchData(); // 함수 호출
  },[]);
  
  // 렌더링 조건 만들기
  if(loading){
    return <p>로딩 중...</p>
  }
  if(error){
    return <p>오류 발생{error}</p>
  }
  // 출력
  return (
    <div>
      <h1>유저 목록 및 이메일</h1>
      <ul>
        {users.map((user) =>(
          <li key={user.id}>
            이름 : {user.name}<br />
            이메일 : {user.email}
          </li>
        ))}
      </ul>
    </div>
  )

}
