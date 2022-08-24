import { useState } from "react"

export default function TodoInput({todoArr,setTodoArr}) {
    let [newTodo, setNewTodo] = useState({
        task:"",
        id:""
    })
    
    function posi(e) {
        setNewTodo({
            task:e.target.value,
            id:`${Math.floor(Math.random()*40)}`
        })

        
    }
    function submit(input) {
        setTodoArr([...todoArr, input])
        console.log(todoArr)
setNewTodo({
    task:"",
    id:""
})
        
    }

    return (
        <>
            <div>
                <input type="text" name="" id="" onChange={posi} value={newTodo.task} />
                <button onClick={() => submit(newTodo)}>submit</button>
                
                
            </div>
        </>
    )
}
