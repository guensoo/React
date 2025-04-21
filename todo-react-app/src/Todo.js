import {useState} from "react";
import {ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton} from '@mui/material'
import DeleteOutlined from '@mui/icons-material/DeleteOutlined'
// 현재 파일에서는 checkBox와 label 컴포넌트를 만들어보자
//let item = {justName : {id:"0",title:"Hello world 1",done:true}}

// ListItemSecondaryAction
// ListItem 내부에서 텍스트나 아이콘 이후에 보조 액션 영역을 오른쪽 끝에 고정배치 해준다.
// 반드시 ListItem의 자식으로만 사용해야 한다.

// DeleteOutlined
// MUI 아이콘 라이브러리에 포함된 휴지통 아이콘 컴포넌트이다.


let Todo = (props) => {

  // App.js에서 받은 한가지 할 일
  const[item,setItem] = useState(props.item);
  const [readOnly, setReadOnly] = useState(true);
  const editItem = props.editItem;

  // true -> false로 바꾸는 trunOffReadOnly 함수 추가
  const turnOffReadOnly = () => {
    setReadOnly(false);
  }

  const turnOnReadOnly = (e) => {
    if(e.key == 'Enter'){
      setReadOnly(true);
    }
  }

  // 변경을 감지하는 함수
  // const handleChange = (e) => {
  //   setItem({
  //     ...item,
  //     title:e.target.value,
  //   })
  // }

  const editEventHandler = (e) => {
    item.title = e.target.value
  }

  // 체크박스 변경함수
  const checkBoxEventHandler = (e) => {
    item.done = e.target.checked;
    editItem();
  }
  // 삭제함수
  const deleteItem = props.deleteItem;

  const deleteEventHandler = () => {
    deleteItem(item);
  }
  
  // a = justName({id:"1", title:"Hello world 2", done:false})
  return(
    // html 코드가 들어가는 부분
    // 속성을 쓸 때 카멜케이스로 작성하기
    // onclick -> onClick
    // class -> className
    <ListItem>
      <Checkbox checked={item.done} onChange={checkBoxEventHandler}/>
      {/* 다양한 내용의 할 일을 추가하는 것 */}
      {/* 임의의 Todo리스트는 각 Todo마다 다른 내용을 갖고 있어야 한다. */}
      {/* 이 요구사항을 충족하기 위해 Todo컴포넌트에 title을 매개변수로 넘긴다. */}
      
      {/* label태그는 for속성에 name값으로 연결해서 어떤 요소와 연결될지 지정 */}
      <ListItemText>
        <InputBase
            inputProps={{"aria-label" : "naked", "readOnly":readOnly}}
            onClick={turnOffReadOnly}
            onChange={editEventHandler}
            onKeyDown={turnOnReadOnly}
            type="text"
            id={item.id}
            name={item.id} 
            value={item.title}
            multiline={true}
            fullWidth={true}
         />
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton aria-label = 'Delete Todo' onClick={deleteEventHandler}>
            <DeleteOutlined />
          </IconButton>
        </ListItemSecondaryAction>
        </ListItem>
    )
}


export default Todo;