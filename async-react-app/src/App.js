import logo from './logo.svg';
import './App.css';
import { Sync, Async } from './Sync';
import { Fetch, Axios } from './Async';
import { FetchExam } from './FetchExam';
import { Users } from './UserList';
import { BlogApp } from './BlogAnswer';

function App() {
  return (
    <div className="App">
      {/* <Sync /> */}
      {/* <Async /> */}
      {/* <Axios /> */}
      {/* <FetchExam /> */}
      {/* <Users /> */}
      <BlogApp />
    </div>
  );
}

export default App;
