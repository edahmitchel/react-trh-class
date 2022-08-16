import { useState } from "react"

export default function TodoInput (){
const [newTodo,setNewTodo] = useState("i")
let [ todoArr, setTodoArr] =useState([])
function submit (){
    // let newArr = todoArr.push(newTodo)
    setTodoArr(prev=>[...prev,newTodo])
    console.log(todoArr)

}
    return(
        <>
        todo input
        <div>
            <input type="text" name="" id="" onChange={(e)=>setNewTodo(e.target.value)} />
        <button onClick={submit}> submit todo</button>
        </div>
        <div>
            todos
           <p>
            {todoArr.map(todo=> <p>{todo}</p>)}
            </p> 
        </div>
        
        </>
    )
}
