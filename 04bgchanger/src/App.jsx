import React from 'react'
import { useState } from 'react'


function App() {
  const [bgColor, setBgColor] = useState("green")
  return (

    <div className="w-full h-screen " style={{ backgroundColor: bgColor }}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">

        <div className="flex flex-wrap justify-center  gap-3 shadow-2xs bg-white rounded-lg px-3 py-2  font-bold tracking-wider ">

          <button
            onClick={() => setBgColor("red")}
            className="outline-none border-2 border-black px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >Red</button>

          <button
            onClick={() => setBgColor("orange")}
            className="outline-none border-2 border-black px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}
          >Orange</button>

          <button
            onClick={() => setBgColor("skyblue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black"
            style={{ backgroundColor: "skyblue" }}
          >Sky</button>

          <button
            onClick={() => setBgColor("green")}
            className="outline-none border-2 border-black px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >Green</button>

          <button
            onClick={() => setBgColor("blue")}
            className="outline-none border-2 border-black px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >Blue</button>
        </div>

      </div>

    </div>
  )
}

export default App
