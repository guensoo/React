// 블로그 프로그램 만들기
// 1. 게시물 리스트를 불러오는 기능
// 2. 게시물 추가 기능
// 3. 게시물 삭제 기능

// 제목과 내용을 입력할 수 있는 입력필드 2개와 추가버튼
// 입력필드 밑에는 게시물 리스트를 출력
// 각각의 게시물은 삭제버튼이 옆에 있어야 함

import { useState, useEffect } from "react"

const Blog = () => {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) =>{
      if(!response.ok){
        throw new Error('게시물 불러오기 오류');
      }
      return response.json();
    })
    .then((data) => {
      setPosts(data)
    })
    .then((error) => {
      setError("error.message")
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])
  useEffect();
  
  const addPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  const remove = () => {
    return setPosts([])
  }

  return (
    // onClick => addPosts
    <div>
      <h1>블로그 게시물</h1>
        <ul>
          
        </ul>
    </div>
  )
}
