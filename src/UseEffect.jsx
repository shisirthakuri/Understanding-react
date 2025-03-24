import React, { useEffect, useState } from 'react'
const UseEffect = () => {
// first type of useEffect hooks on the basic of execution
// useEffect(()=>{
// //API  bata data laidey first time page ma aauda kherei k dekhaune vanne kura ho tyo useEffect ko kam
//     console.log("hi there")
// },[])

// 



    const [count, setCount]= useState(0)
    const [count1,setCount1]= useState(0)
// second type of useEffect hooks on the basis of execution
// useEffect(()=>{
//     document.title = count
//     console.log("useEffect triggerd")

// },[count,count1])
   

//third type of useEffect hooks on the basic of execution
const consoleLog = ()=>console.log("useEffect hoook trigred")
useEffect(()=>{
    consoleLog()
})


  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={()=>setCount(count + 1)}>+</button>
      <h1>count1:{count1}</h1>
      <button onClick={()=>setCount1(count1-1)}>-</button>
     
     
    </div>
  )
}

export default UseEffect
