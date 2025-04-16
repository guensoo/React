import logo from './logo.svg';
import './App.css';
import {Greeting, Farewell} from './Greetings';
import WelcomeMessage from './Welcome';
import { useState } from 'react';
import Todo from './Todo';
import { Example } from './Example';

function App() {

  const [name ,setName] = useState("John");
  return (
    <div className="App">
      <Example />
      {/* 컴포넌트의 호출 <컴포넌트명 />
      <Greeting name = {name} />
      <Farewell name = "John" />
      {name은 하나씩 선언해야 한다.}
      {<WelcomeMessage isLoggedIn={true} /> */}
    </div>
  );
}


export default App;
