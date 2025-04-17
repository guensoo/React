import { useState } from "react"

export let Example = () => {

  const [message, setMessage] = useState("Hello, world!");
  const [name, setName] = useState("홍길동");
  const [count, setCount] = useState(0);

  // 일반 자바스크립트 지역변수
  // 값이 바뀌어도 화면에 렌더링이 일어나지 않는다.
  let element = <p>{message} / {name}</p> // JSX
  let x = 100;

  return(
    <div>
      <p>{x}</p>
      <button onClick={() => {x = 500}}>Change X</button>
      {element}
      {/* 상태는 무조건 setter를 이용하여 변경해야 한다. */}
      <button onClick={() => setMessage("Hello, React")}>Change Message</button>

      <p>Count : {count}</p>
      <button onClick={() => setCount(count+1)}>Increase</button>
    </div>
  )
}
