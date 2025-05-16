import { useState,useEffect, useContext } from "react";
import { BoardContext } from "../context/BoardContext";
import { useParams, useNavigate } from "react-router-dom";
import CustomInput from '../component/CustomInput'
import CustomButton from "../component/CustomButton";
import BoardList from "./BoardList";

const EditPost = () => {

  // 1. 게시글을 가져와서 출력하기
  // 2. 수정한 게시글을 게시글 목록에 반영하기
  // 3. 게시판 목록으로 가기
  const navigate = useNavigate();

  // const [title, setTitle] = useState("");
  // const [author, setAuthor] = useState("");
  // const [content, setContent] = useState("");

  const {id} = useParams(); // 파라미터로 받는다.(POSTMAN 생각해보셈 키-밸류 쌍인데 id가 키면 밸류는? 주소창에서 어디겠냐?)
  const {boardList, setBoardList} = useContext(BoardContext); // BoardContext에 있는 mokData의 배열을 가져온다.



  const [post, setPost] = useState({
    title:"",
    author:"",
    content:""
  });

  const {title, author, content} = post;

  // input필드에 작성한 내용을 state에 세팅
  const onChange = (event) => {
    console.log("onChange 호출");
    const {value, name} = event.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]:value,
    }))
  }

  useEffect(() => {
    const currentPost = boardList.find((item) => item.id === parseInt(id)); // findItem 만들어서 boardList에서 찾아올거다! 
    // 매개변수의 id와 주소창에 입력된 id가 같은지! 근데 주소창으로 들어온건 id : "10" 이런식으로 문자열이라
    // parseInt로 정수 변환 하고 정수끼리 비교!
    if(currentPost) { // 만약 findItem이 true이면 -->>> 위에처럼 post의 id와 우리가 입력한(Params) 값이랑 같으면 true임
      setPost(currentPost); // findItem으로 item값을 재설정한다.
    } else{
      console.log("게시글을 찾을 수 없습니다.")
    }
  },[id, boardList])

  const updatePost = () => {
    setBoardList((prevList) => prevList.map((item) => item.id === parseInt(id) ? { ...item, ...post} : item));
    alert('게시물이 수정되었습니다.')
    navigate('/post/'+id);
  }


 
  // const updatePost = () => {
  //   console.log("수정버튼 호출")
  //   if(window.confirm("수정하시겠습니까?")){
  //     const edit = boardList.map(post => post.id === parseInt(id) ? { ...post, title, author, content, writingTime: new Date().toISOString() } : post);
  //     console.log("🧾 수정 대상 ID", id);
  //     console.log("🧾 boardList", boardList);
  //   setBoardList(edit)
  //   alert("수정되었습니다.");
  //   navigate("/");
  //   }
  // }

  const backToBoard = () => {
    if(window.confirm("취소하시겠습니까?")){
      navigate("/");
    }
    
  }
    return(
        <div>
            <h1>글 수정하기</h1>
            <form>
                <CustomInput name='title' label="제목" value={title} readOnly={false} onChange={onChange}/>
                <CustomInput name='author' label="작성자" value={author} readOnly={false} onChange={onChange}/>
                <CustomInput 
                    label="내용"
                    name='content'
                    multiline
                    readOnly={false}
                    rows={6}
                    value={content}
                    onChange={onChange}    
                />
                <div>
                    <CustomButton label="수정 완료" onClick={updatePost} />
                    <CustomButton label="취소" variant='outlined' color="secondary" onClick={backToBoard} />
                </div>
            </form>
        </div>
    )
}

export default EditPost;