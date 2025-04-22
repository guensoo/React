import logo from './logo.svg';
import './App.css';
import TimerFunction, { UserList, Count, Cleanup } from './hook/UserEffectEx';
import { Counter_ref, InputFocus, InputSample, PreviousValue } from './hook/UseRefEx';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <TimerFunction />
      <UserList />
      <Count />
      <Counter_ref />
      <InputSample />
    
      <Cleanup 
        person = {{name : '홍길동', age:24}}
        address = {{city:'Seoul', locate:'금천구'}}
      />
      <PreviousValue />
      {/* person : {name:"홍길동", age:24}*/}
{/* <Counter count={0} />
<ShowHide /> */}
    </div>
  );
}

export default App;
