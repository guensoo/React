import { useState, createContext } from "react";
import { mokData } from "../pages/mokData";

export const BoardContext = createContext({
  boardList: [], // 여기 반드시 [] 빈 배열이어야 함
  setBoardList: () => {}
});

const BoardProvider = ({children}) => {
  const [boardList, setBoardList] = useState([])

  return (
    <BoardContext.Provider value={{boardList, setBoardList}}>
      {children}
    </BoardContext.Provider>
  )
}

export default BoardProvider;