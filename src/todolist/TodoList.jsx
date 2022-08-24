

const TodoList = ({any,setTodoArr}) => {

function deleteTodo(taskId){
let filteredArr = any.filter((item)=>item.id!==taskId)
setTodoArr(filteredArr)
}

  function renderTOdo(item) {
    return (
    <div key={item.id}>
    <input value={item.task} 
    />
    <button onClick={()=>deleteTodo(item.id)}>delete</button>
    </div>
    )

}

  return (
    <div>
      <h1>
        todolist
        </h1>
      {any.map(renderTOdo)} 
    </div>
  )
}

export default TodoList
