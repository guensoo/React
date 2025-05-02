import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import {ThemeContext} from './context/context';
import {Routes, Route} from 'react-router-dom';
import { NavBar } from './navigation/navigation';
import { Home } from './pages/home';
import { Posts } from './pages/posts';
import { Settings } from './pages/settings';


function App() {
  const {theme} = useContext(ThemeContext)

  const themeColor = theme === true ? 'light' : 'dark';

  const style = {
    backgroundColor: theme === true ? '#f9f9f9' : '#333',
    color: theme === true ? '#333' : '#f9f9f9',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    fontFamily: 'sans-serif',
   };

  return (
    <div style={style}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home themeColor={themeColor} />} />
        <Route path="/posts" element={<Posts themeColor={themeColor} />} />
        <Route path="/settings" element={<Settings themeColor={themeColor} />} />
        
      </Routes>
    </div>
  );
}

export default App;
