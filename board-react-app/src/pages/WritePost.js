import {useState, useContext} from 'react'
import { BoardContext } from '../context/BoardContext'
import CustomButton from '../component/CustomButton'
import CustomInput from '../component/CustomInput'
import { Grid, Button, TextField } from '@mui/material'
import {Link, useNavigate} from 'react-router-dom'
import BoardList from './BoardList'
import { API_BASE_URL } from '../api-config'
import axios from 'axios'

const WritePost = () => {

  const {boardList, setBoardList} = useContext(BoardContext);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const multiline = true;
  const rows = 8;
  const readOnly = false;

  const navigate = useNavigate();

  const savePost = (e) => {
    e.preventDefault();
    
    const newPost = {
      // id:boardList.length + 1,
      title,
      author,
      writingTime : new Date().toISOString(),
      content,
    }
    axios({
      method: 'POST',
      url: API_BASE_URL+'/add',
      data: newPost
    })
    .then(res => {
      console.log(res.data)
      alert('게시물이 등록되었습니다.')
      navigate("/");
    })
    .catch((err) => {
      console.error("등록 실패 오류 발생 : "+err)
    })

    
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
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder='작성자'
          readOnly={false}
          />
      </Grid>
      <Grid>
        <CustomInput
          label="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
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