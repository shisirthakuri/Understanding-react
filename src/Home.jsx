import React, { useState } from "react"




const Home = () => {

//   const state = useState(0) //[0, function]
// const state1 = state[0] //initial state
// const state2 = state[1]
const [count,setCount] = useState(0)

function increment(){
  setCount(count +1)
}
// const increment = ()=>{
//   setCount(count +1)
// }

  return (
    <>
    <h1>{count}</h1>
    <button onClick={increment}>counter</button>
   </>
  )
}

export default Home
