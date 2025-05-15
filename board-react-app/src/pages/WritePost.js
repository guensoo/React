import {useState, useContext} from 'react'
import { BoardContext } from '../context/BoardContext'
import CustomButton from '../component/CustomButton'
import CustomInput from '../component/CustomInput'
import { Grid, Button, TextField } from '@mui/material'
import {Link, useNavigate} from 'react-router-dom'
import BoardList from './BoardList'

const WritePost = () => {

  const {boardList, setBoardList} = useContext(BoardContext);

  const [title, setTitle] = useState("");
  const [auth, setAuth] = useState("");
  const [text, setText] = useState("");
  const multiline = true;
  const rows = 8;
  const readOnly = false;

  const navigate = useNavigate();

  const savePost = (e) => {
    e.preventDefault();
    const newPost = {
      id:boardList.length + 1,
      title,
      auth,
      writingTime : new Date().toISOString(),
      text,
    }

    setBoardList([...boardList,newPost]);
    alert('게시물이 등록되었습니다.')
    navigate("/");
  }

  const backToBoard = () => {
    navigate("/");
  }


  const handleCancelPost = () => {
    navigate("/")
  }


  return (
    <div>
      <h1>글쓰기</h1>
      <form>
        <Grid>
          <CustomInput
          label="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='제목'
          readOnly={false}
          />
      </Grid>
      <Grid>
        <CustomInput
          label="작성자"
          value={auth}
          onChange={(e) => setAuth(e.target.value)}
          placeholder='작성자'
          readOnly={false}
          />
      </Grid>
      <Grid>
        <CustomInput
          label="내용"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='내용'
          multiline={multiline}
          rows={rows}
          readOnly={false}
          />
      </Grid>
      </form>
      <div>
        <Grid>
          <Button type='submit' variant="outlined" onClick={savePost}>저장</Button>
          <Button variant="outlined" color="secondary" onClick={handleCancelPost}>취소</Button>
        </Grid>
      </div>
      
    </div>
  )
}

export default WritePost;