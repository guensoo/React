import logo from './logo.svg';
import './App.css';
import { call } from './ApiService';
import { Get } from './ProductList';

function App() {
  return (
    <div className="App">
      <Get />
    </div>
  );
}

export default App;
