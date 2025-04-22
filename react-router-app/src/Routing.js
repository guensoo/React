import {Routes, Route} from 'react-router-dom';
import { Dashboard, Overview, Settings} from './Pages';
import { Navbar } from './Navbar';

export const Routing = () => {
  return(
    <>
    {/* <Navbar /> */}
      {/* 라우팅 그룹 */}
      <Routes>
        {/* 주소창에 path가 일치하면 컴포넌트를 렌더링 한다. */}
        {/* path=URL 의 조건이 맞아야 화면에 띄워준다. */}
        {/* Home화면은 /만 있어도 된다.(생략 가능하지만 보통은 적어둔다.)
        (/) = 루트 경로 */}
        {/* <Route path = "/" element={<Home />} /> */}
        {/* 동적 라우팅이 되는 원리
        리액트 라우터가 내부에서 정규표현식으로 변환을 한다.
        "/users/:userId/settings/:tab"
        /^users/([^/]+)/settings/([^/]+)$/ */}
        {/* <Route path = "/users/:id" element={<UserProfile />} />
        <Route path = "/About" element={<About />} />
        <Route path = "/posts/:postId" element={<PostDetail />} /> */}
        {/* /dashboard이하의 모든 경로를 이 라우트가 잡아낸다.
        /dahsboard/overview, /dashboard/settings 등 */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="overview" element={<Overview />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  )
}

export default Routing;