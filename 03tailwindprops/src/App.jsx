import { useState } from 'react'
import React from 'react'

function App() {
  const [bgColor, setBgColor] = useState("red")
  return (
    
    <div className = "w-full h-screen " style={{backgroundColor: bgColor}}  >
      </div>
  )
}

export default App
