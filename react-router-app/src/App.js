import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Home, About } from './Pages';
// Routes : switch같은 개념으로 가장 구체적인 경로를 우선 매칭한다.
// Route : URL과 컴포넌트를 매핑하여 특정 경로에 맞는 컴포넌트를 렌더링한다.

// Route 컴포넌트의 주요 속성
// 1. path
// URL 경로를 정의한다.
// 사용자가 특정 경로에 접근할 때 어떤 컴포넌트를 렌더링할지 결정한다.

// 2. element
// path에 들어있는 경로와 일치할 때 렌더링 할 컴포넌트를 지정한다.
function App() {
  return (
    <div className="App">
      <Routes>
        {/* path=URL 의 조건이 맞아야 화면에 띄워준다. */}
        {/* Home화면은 /만 있어도 된다.(생략 가능하지만 보통 / 은 적어둔다.) */}
        <Route path = "/" element={<Home />} />
        <Route path = "/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
