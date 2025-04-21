import { useEffect, useRef, useState } from "react";

// useRef() 훅
// 변경 가능한 객체 하나를 생성해준다.
// 반환된 객체는 {current : 값} 형태이고, 컴포넌트의 전체 생명주기 동안
// 같은 객체를 유지한다.

// const refContainer = useRef(0);
// const refContainer = {current : 0}

// 주요특징
// 1. 값 저장
// 렌더링 사이에 값을 기억해두고 싶을 때 사용한다.
// 값이 바뀌어도 리렌더링을 발생시키지 않는다.

// 2. DOM 접근
// JSX로 작성한 요소를 ref속성으로 연결해주면,
// 해당 DOM 노드에 직접 접근할 수 있다.

export const Counter_ref = () => {
  const countRef = useRef(0);

  const onClick = () => {
    countRef.current += 1;
    console.log(`현재 카운트 : ${countRef.current}`)
  }

  return(
    <div>
      <h1>{countRef.current}</h1>
      <button onClick={onClick}>증가</button>
    </div>
  )
}

export const InputFocus = () => {

  // inputEl = {current : <input ref={inputEl} placeholder="여기에 입력해 보세요"/>};
  const inputEl = useRef(null);

  useEffect(() => {
    // 화면이 렌더링 되면 input태그에 focus를 줘서
    // 바로 입력할 수 있게 한다.
    inputEl.current.focus();
  },[])

  return(
    <div>
      <input ref={inputEl} placeholder="여기에 입력해 보세요" />
    </div>
  )
}

// InputSample
// 이름과 닉네임을 입력하는 필드를 만든다.
// 이름과 닉네임을 입력하면 밑에 띄운다.
// 초기화 버튼을 만들고 버튼을 누를시 이름 입력필드에 포커스가 가도록
// 만들기

// export const InputSample = () => {
//   const nameEl = useRef(null);

//   const [name, setName] = useState();
//   const [nick, setNick] = useState();


//   const Reset = () => {
//     setName("");
//     setNick("");
//     nameEl.current.focus();
// }
  
//   return (
//     <div>
//       <div>
//         <input ref={nameEl} value={name} onChange={(e) => setName(e.target.value)} placeholder="이름을 입력해 주세요" />
//         <input value={nick} onChange={(e) => setNick(e.target.value)} placeholder="닉네임을 입력해 주세요" />
        
//       </div>
//       <div>
//         <b>값 : </b>
//         {name}({nick})
//       </div>
//       <div>
//         <button onClick={Reset}>초기화</button>
//       </div>
//     </div>
//   )
// }

// 강사님 Ver

export const InputSample = () => {
  const [inputs, setInputs] = useState({name:"",nickname:""});
  const nameRef = useRef(null);

  const {name, nickname} = inputs;

  const onChange = (e) => {
      const {id , value} = e.target;

      // console.log(`id: ${id}, value : ${value}`);
      setInputs({
          ...inputs,
          [id]:value,
      })
      // {...inputs, [id]:value,}
  }

  const onReset = () => {
      setInputs({
          name:"",
          nickname:"",
      })
      nameRef.current.focus();
  }

  return(
      <div>
          <input
              id = "name"
              placeholder='이름을 작성해주세요'
              onChange={onChange}
              value={name}
              ref={nameRef}
          />
          <input
              id="nickname"
              placeholder='닉네임을 작성해주세요'
              onChange={onChange}
              value={nickname}
          />
          <button onClick={onReset}>초기화</button>
          <div>
              <b>값:</b>
              {name}({nickname})
          </div>
      </div>
  )
}