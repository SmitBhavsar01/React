import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter]  = useState(15)
  
   const addValue = () => {
    //counter = counter + 1
    if (counter >= 20) {
      alert("Counter value cannot exceed 20")
      return
    }else {
      setCounter(counter + 1)
    }
    
  }

  const removeValue = () => {

    if (counter <= 0) {
      alert("Counter value cannot be less than 0")
      return
    }else {

      setCounter(counter - 1)
    }

  }
  
  return (
    <>
      <h1>React Programs</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value </button> 
      <br />
      <br />
      <button
      onClick={removeValue}
      >remove value </button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
