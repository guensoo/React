// 현재 파일에서는 checkBox와 label 컴포넌트를 만들어보자

let Todo = () => {
  return(
    // html 코드가 들어가는 부분
    // 속성을 쓸 때 카멜케이스로 작성하기
    // onclick -> onClick
    // class -> className
    <div className="Todo">
      <input type="checkbox" id="todo0" name="todo0" value="todo0" />
      {/* 다양한 내용의 할 일을 추가하는 것 */}
      {/* 임의의 Todo리스트는 각 Todo마다 다른 내용을 갖고 있어야 한다. */}
      {/* 이 요구사항을 충족하기 위해 Todo컴포넌트에 title을 매개변수로 넘긴다. */}
      
      {/* label태그는 for속성에 name값으로 연결해서 어떤 요소와 연결될지 지정 */}
      <label for="todo0">Todo 컴포넌트 만들기</label>
    </div>
  )
}

export default Todo;