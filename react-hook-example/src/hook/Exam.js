// ShowHide() 컴포넌트를 만든다
// 버튼이 있다.'숨기기''보이기'
// Hello, React
// 버튼을 누르면 Hello, React가 보였다가 안보였다 한다.
// 컴포넌트는 App에서 호출해서 확인
import { useState } from "react";

let ShowHide = () => {
  
  const [button, setHide] = useState("숨기기");
  const [message, setMessage] = useState("Hello, React");
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
  }
  return (
    <div>
      {/* <h1>{message}</h1> */}
      <button onClick={toggleVisibility}>
        {isVisible ? '숨기기' : '보이기'}
      </button>
      {isVisible && <p>{message}</p>}
    </div>
  )
}

// 컴포넌트명은 Sol1
let Sol1 = () => {
  const [eating, setEating] = useState(['초콜릿', '사탕'])
  const [value, setValue] = useState("");

  const inputHandler = (e) => {
    setValue(e.target.value);
  }

  const clickHandler = () => {
    setEating(prev => [value, ...prev]);
  }
  return(
    <div>
      <input onChange={inputHandler} />
      <button onClick={clickHandler}>추가</button>
      <ul>
        {eating.map((item,idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  )
    

}

export default WantList;
// export ShowHide;