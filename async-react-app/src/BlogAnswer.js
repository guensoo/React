import axios from "axios";
import { useState, useEffect } from "react";

export const BlogApp = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newPost, setNewPost] = useState({title:'', body:''});

  // 게시물 리스트 가져오기
  useEffect(() => {
    const fetchPosts = async() => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          setPosts(response.data)
        })
        .catch(err => setError(err.message))
        .finally(() => {
          setLoading(false);
        })
    }
    fetchPosts();
  },[])

  // 게시물 추가
  // jsonPlaceholder에 추가를 요청한다고 해서 진짜 추가되는건 아님
  // state에 새 게시물을 추가하기
  const addPost = async() => {
    if (!newPost.title.trim()) {
      alert("제목을 입력해주세요.");
      return;
    }
    if (!newPost.body.trim()) {
      alert("내용을 입력해주세요.");
      return;
    }
    axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
    .then((response) => {
      setPosts([response.data, ...posts]);
      setNewPost({title:'', body:''});
    })
    .catch((err) => {
      setError(err.message);
    })
  }

  // 게시글 삭제
  // 내가 원하는 글만 삭제하고 나머지를 필터링해서 다시 렌더링 하기
  const deletePost = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    setPosts(posts.filter(post => post.id !== id))
  }


  if(loading) return <p>로딩 중...</p>
  if(error) return <p>Error : {error}</p>

  return(
    <div>
      <h1>블로그 게시물</h1>
      <h2>새 게시물 추가</h2>
      {/* 제목입력창 */}
      <input
        type="text"
        placeholder="제목"
        value={newPost.title}
        onChange={(e) => setNewPost({...newPost, title:e.target.value})}
        />
        {/* 내용입력창 */}
        <textarea
          placeholder="내용"
          value={newPost.body}
          onChange={(e) => setNewPost({...newPost, body:e.target.value})}
        />
        <button onClick={addPost}>내용 추가</button>
        {/* 게시물 리스트 */}
        {posts.map(post => (
          <div key={post.id} style={{border:'1px solid black', margin: '10px', padding:'10px'}}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => deletePost(post.id)}>삭제</button>  
          </div>
          
        ))}
        
    </div>
  )
}