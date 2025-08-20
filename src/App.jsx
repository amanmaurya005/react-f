import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import User from './User'

function App() {
  const [counter,setCounter]=useState(0)

  return (
    <>
    <User />
    
    <h1>count:{counter}</h1>
    <button onClick={()=>setCounter(counter+1)}>increase</button>
    <button onClick={()=>setCounter(counter-1)}>decrease</button>
    </>
  )
}
export default App





export function First1(){
  return (
    <div>
      <h1>first component</h1>
    </div>
  )
}

export function Fruit1(){
  return(
    <div>
      <h1>Apple</h1>
    </div>
  )
}
export function Color1(){
  return (
    <div>
      <h1>red</h1>
    </div>
  )
}

