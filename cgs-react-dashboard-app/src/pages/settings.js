import { useContext } from "react"
import {ThemeContext} from "../context/context"

export const Settings = ({themeColor}) => {
  const {toggleTheme} = useContext(ThemeContext);

  return (
    <div>
      <h2>Settings</h2>
      <p>Current Theme : <strong>{themeColor}</strong></p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}