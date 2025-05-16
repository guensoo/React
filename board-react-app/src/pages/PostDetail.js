import { useState,useEffect, useContext } from "react";
import { BoardContext } from "../context/BoardContext";
import { useParams, useNavigate } from "react-router-dom";
import CustomButton from "../component/CustomButton";
import BoardList from "./BoardList";
import EditPost from "./EditPage";
import { API_BASE_URL } from "../api-config";
import axios from "axios";

const PostDetail = () => {

  const [item, setItem] = useState({});

  const navigate = useNavigate();

  const {id} = useParams(); // 파라미터로 받는다.(POSTMAN 생각해보셈 키-밸류 쌍인데 id가 키면 밸류는? 주소창에서 어디겠냐?)
  const {boardList, setBoardList} = useContext(BoardContext); // BoardContext에 있는 mokData의 배열을 가져온다.
  // id를 통해 boardList에 들어있는 게시글 한건을 꺼내서
  // 화면에 출력하기
  useEffect(() => {
    const findItem = boardList.find((e) => e.id === parseInt(id)); // findItem 만들어서 boardList에서 찾아올거다! 
    // 매개변수의 id와 주소창에 입력된 id가 같은지! 근데 주소창으로 들어온건 id : "10" 이런식으로 문자열이라
    // parseInt로 정수 변환 하고 정수끼리 비교!
    if(findItem) { // 만약 findItem이 true이면 -->>> 위에처럼 post의 id와 우리가 입력한(Params) 값이랑 같으면 true임
      setItem(findItem); // findItem으로 item값을 재설정한다.
    }
  },[id, boardList]) // id 또는 boardList가 바뀔때 마다 재랜더링 ㄱㄱ

  const moveToEdit = () => {
    navigate(`/edit/${id}`)
  }
  // 게시글 삭제하기
  const handleDelete = () => {
    
      
      if(window.confirm("게시글을 삭제하시겠습니까?")){
      // 게시글 한 건 삭제
      // const deletePost = boardList.find((e) => e.id === parseInt(id));
      // setBoardList(prevList => prevList.filter(post => post.id !== parseInt(id)));

      axios({
        method: 'DELETE',
        url: 'http://localhost:10000/api/board'+`/post/${id}`,
      })
      .then((res) => {
        setBoardList(res.data);
        console.log("결과 : 성공")
      })
      // 삭제되었습니다. alert창 띄우기
      alert("삭제되었습니다.");
      // 게시판 목록으로 이동
      navigate("/");
    }
  }

  const moveToBoard = () => {
    navigate("/")
  }

  return(
    <div>
      <h2 className="board-detail-title">{item.title}</h2>
      <div className="board-detail-info">
        <h5>작성자 : {item.author}</h5>
        <p style={{fontSize:"12px", color:"gray"}}>{item.writingTime}</p>
      </div>
      <hr />
        <p className="board-detail-body">{item.content}</p>
      <hr />
      <div>
        <CustomButton label="수정" onClick={moveToEdit} />
        <CustomButton label="삭제" color="secondary" onClick={handleDelete} />
        <CustomButton label="목록으로" variant="outlined" onClick={moveToBoard} />
      </div>
    </div>
  )
}

export default PostDetail;