import { useState, createContext } from "react";
import { mokData } from "../pages/mokData";

export const BoardContext = createContext(null);

const BoardProvider = ({children}) => {
  const [boardList, setBoardList] = useState(mokData)

  return (
    <BoardContext.Provider value={{boardList, setBoardList}}>
      {children}
    </BoardContext.Provider>
  )
}

export default BoardProvider;