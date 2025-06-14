import { useState } from 'react'


function App() {
  const [color, setColor] = useState("green")

  return (
   
      
      <div className='w-full h-screen' 
      style={{backgroundColor: color}}>

      </div>
      
   
  )
}

export default App
