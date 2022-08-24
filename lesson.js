function parent(){
    // let change =(todo)=>[...todos,todo]
    let todoArr = []
    function setTodoArr(todo){

        todoArr.push(todo)

    }
    function toodoForm(){
    
        let t = "do something"
        setTodoArr(t)
    }
    function todoList(){
        console.log(todoArr)
    }
    toodoForm()
    todoList()
}




parent()



// function firstChild(){
//     change()
//     // console.log(c) 
// }
// firstChild()
// secondChild()
// function secondChild(){
// let d = a
// console.log(d)