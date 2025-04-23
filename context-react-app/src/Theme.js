import { Children, createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(false);

  return(
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export const ThemeSwitcher = () => {

  const {theme, setTheme} = useContext(ThemeContext);

  const clickHandler = () => {
    setTheme(theme => !theme)
  }
  
  return(
    <div style={{
      backgroundColor: theme ? '#333' : '#fff',
      color: theme ? '#fff' : '#000',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <h1>현재 {theme ? '다크모드' : '라이트모드'}입니다.</h1>
      <button onClick={clickHandler} >테마 변경 버튼</button>
    </div>
  )
}