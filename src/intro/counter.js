import React from 'react'
import { useState } from 'react'
const Counter = () => {
    let [count, setCount] = useState(0)
    // let count = 0
    function increment(){
    setCount(count + 1)
        console.log(count)
    }
  return (
    <div>
        <h1>Counter</h1>
        <p>{count}</p>
        <button onClick={increment}>+</button>
      
    </div>
  )
}

export default Counter
