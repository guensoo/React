import { useContext } from "react"
import {ThemeContext} from "../context/context"
import {Link} from 'react-router-dom'
import '../index.css'

export const NavBar = () => {
  
  return (
    <div className={`navbar`}>
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/settings">Settings</Link>
    </div>
  )
}