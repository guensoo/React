import logo from './logo.svg';
import './App.css';
import { Counter } from './component/counter';
import {useState} from 'react'
import { RouterEx } from './router/router';

function App() {

  // 리액트에서 제공하는 훅(hook)
  // 함수를 실행하면 상태변수 1개와, 변수의 값을 바꿔줄 수 있는 함수 1개를 호출하는 

  const [count, setCount] = useState(0);
    return (
    <div className="App">
      <RouterEx />
      <Counter count={count} setCount={setCount}/>
      {/* // 컴포넌트의 호출 */}
    </div>
  );
}

export default App;
