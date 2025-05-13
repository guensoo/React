import { useState, useEffect } from "react"
import { Container, Grid, Typography, TextField, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { call } from "./ApiService"

export function Get(){
  const [products, setProducts] = useState([])

  useEffect(() => {
    call("/products","GET").then(res => {
      setProducts(res.data);
    });
  },[]);
  const handleSubmit = () => {
    console.log("요청을 보냅니다.")
  }

  return (
    <div>
      <button type="submit" onClick={handleSubmit}>상품추가</button>
      <table border='1px' align='center'>
        <tr>
          <td>상품 번호</td>
          <td>상품 이름</td>
          <td>상품 재고</td>
          <td>상품 가격</td>
          <td>등록 날짜</td>
          <td>수정 날짜</td>
        </tr>
        {products.map(p => (
        <tr key={p.id}>
          <td>{p.id}</td>
          <td>{p.name}</td>
          <td>{p.inventory}</td>
          <td>{p.price}</td>
          <td>{p.localTime}</td>
          <td>{p.editTime}</td>
        </tr>
        ))}
      </table>
    </div>
  )
}

