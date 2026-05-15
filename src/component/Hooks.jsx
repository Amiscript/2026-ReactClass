import React from 'react'
import{useState} from 'react'

// hooks are functions that let you "hook into" React state and lifecycle features from function components. They allow you to use state and other React features without writing a class component. Some common hooks include useState, useEffect, useContext, useReducer, and useRef. Hooks can only be used at the top level of a function component or in custom hooks, and they cannot be called inside loops, conditions, or nested functions. They provide a more concise and flexible way to manage state and side effects in React applications.

// useState is a hook that allows you to add state to a functional component. It returns an array with two elements: the current state value and a function to update that value. 
// variable - store the state
//function - is to change the state
// let name = "john"

// function setname(){
// if(name === 'john'){
//  console.log('marry')
// }
// }
// setname()
// 
// 
function Hooks() {
   const [count, setCount]= useState(0)

   function increment(){
    setCount(count + 1)
   }

   function decrement(){
    setCount(count - 1)
   }

   function reset(){
    setCount(0)
   }

   
  return (
    <div className="text-4xl text-white ">
      <div>{count}</div>
      <div className="flex">
  <button onClick={increment}>Add</button>
      <button onClick={decrement}>Sub</button>
      <button onClick={reset}>Reset</button>
      </div>
    
    </div>
  )
}

export default Hooks