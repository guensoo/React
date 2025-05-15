import { useState,useEffect, useContext } from "react";
import { BoardContext } from "../context/BoardContext";
import { useParams, useNavigate } from "react-router-dom";
import CustomButton from "../component/CustomButton";
import BoardList from "./BoardList";

const PostDetail = () => {

  const [item, setItem] = useState({});

  const navigate = useNavigate();

  const {id} = useParams();
  const {boardList, setBoardList} = useContext(BoardContext);
  // id를 통해 boardList에 들어있는 게시글 한건을 꺼내서
  // 화면에 출력하기
  useEffect(() => {
    const findItem = boardList.find((post) => post.id === parseInt(id));
    if(findItem) {
      setItem(findItem);
    }
  },[id, boardList])

  const moveToEdit = () => {
    navigate("/write")
  }
  const handleDelete = () => {
    navigate("/")
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