import {Link} from 'react-router-dom';
// Link 컴포넌트
// 사용자가 클릭할 때 해당 경로로 이동시키는 링크를 생성한다.

// 주요속성
// to : 이동할 경로를 문자열 또는 객체로 지정한다.
// replace : 뒤로가기 시 이전 URL이 남지 않는다.
// state : 이동 시 함께 전달할 상태를 지정한다.

const Navbar = () => {
  return(
    <div>
    <Link>홈</Link>
    <Link>소개</Link>
    </div>
  )
}