import logo from './logo.svg';
import './App.css';
import TimerFunction, { UserList, Count } from './hook/UserEffectEx';
import { Counter_ref, InputFocus, InputSample } from './hook/UseRefEx';

function App() {
  return (
    <div className="App">
      <TimerFunction />
      <UserList />
      <Count />
      <Counter_ref />
      <InputSample />
{/* <Counter count={0} />
<ShowHide /> */}
    </div>
  );
}

export default App;
