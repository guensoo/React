import {useState} from "react";
import {ListItem, ListItemText, InputBase, Checkbox} from '@mui/material'
// 현재 파일에서는 checkBox와 label 컴포넌트를 만들어보자
//let item = {justName : {id:"0",title:"Hello world 1",done:true}}
let Todo = (props) => {
  const[item,set] = useState(props.item);
  // a = justName({id:"1", title:"Hello world 2", done:false})
  return(
    // html 코드가 들어가는 부분
    // 속성을 쓸 때 카멜케이스로 작성하기
    // onclick -> onClick
    // class -> className
    <ListItem>
      <Checkbox checked={item.done}/>
      {/* 다양한 내용의 할 일을 추가하는 것 */}
      {/* 임의의 Todo리스트는 각 Todo마다 다른 내용을 갖고 있어야 한다. */}
      {/* 이 요구사항을 충족하기 위해 Todo컴포넌트에 title을 매개변수로 넘긴다. */}
      
      {/* label태그는 for속성에 name값으로 연결해서 어떤 요소와 연결될지 지정 */}
      <ListItemText>
        <InputBase
            inputProps={{"aria-label" : "naked"}}
            type="text"
            id={item.id}
            name={item.id} 
            value={item.title}
            multiline={true}
            fullWidth={true}
         />
        </ListItemText>
        </ListItem>
    )
}


export default Todo;