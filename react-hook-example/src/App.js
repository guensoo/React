import logo from './logo.svg';
import './App.css';
import { Counter } from './hook/UseStateEx';
import ShowHide from './hook/Exam';

function App() {
  return (
    <div className="App">
<Counter count={0} />
<ShowHide />
    </div>
  );
}

export default App;
