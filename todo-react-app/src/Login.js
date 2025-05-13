import { Container, Grid, Typography, TextField, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { signin } from "./ApiService";

const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // 페이지가 전체 새로고침 되지 않도록 막는다.
    // React같은 SPA에서 태그 클릭 시 전체 페이지가 새로고침 되지 않고,
    // 클라이언트 라우터로만 경로를 변경하고 싶을 때 사용한다.
    const data = new FormData(e.target); // submit 된 form 데이터를 가져온다.
    const username = data.get("username"); // username의 필드값 가져오기
    const password = data.get("password"); // password 필드값 가져오기

    console.log("아이디 : ", username);
    console.log("비밀번호 : ", password);

    // ApiService를 이용해 보낸다.
    signin({username:username,password:password})
  }

  return (
    <Container component="main" maxWidth='xs' style={{ mt : "8%" }}>
      
          <Typography component="h1" variant="h5" textAlign="center" gutterBottom>
            로그인
          </Typography>
      <form noValidate onSubmit={handleSubmit}>
        <Grid container spacing={2} direction="column">
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id="username"
              label="이메일 주소"
              name="username"
              autoComplete="username"
              />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id="password"
              label="패스워드"
              name="password"
              type="password"
              autoComplete='current-password'
              />
          </Grid>
          
          <Grid item xs={12}>
            <Box mt={2}>
              <Button
              type="submit"
              fullWidth
              variant='contained'
              color="primary">
                로그인
              </Button>
            </Box>
          </Grid>
          <Grid item>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <Typography variant="body2" color="primary">
                계정이 없습니까? 여기서 가입하세요.
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}

export default Login;