import { Container, Grid, Typography, TextField, Button } from "@mui/material";
import { signin } from "./ApiService";

const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("🔥 handleSubmit 호출됨");
  }

  return (
    <Container component="main" maxWidth='xs' style={{marginTop:"8%"}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
        </Grid>
      </Grid>
      <form noValidate onSubmit={handleSubmit}>
        <Grid container spacing={2}>
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
            <Button
            type="submit"
            fullWidth
            variant='contained'
            color="primary">
              로그인
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}

export default Login;