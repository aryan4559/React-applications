import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className = "w-full h-screen " style = {{backgroundColor: color}}>
      <div className = "fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      
      <div className = "flex flex-wrap justify-center gap-3 shadow-lg bg-white"> 
      
      <button className= "outline-non px-4 " onClick={() => setColor("red")} style = {{backgroundColor: "red"}}>Red</button>
      <button className= "outline-non px-4 " onClick={() => setColor("blue")} style = {{backgroundColor: "blue"}}>Blue</button>
      <button className= "outline-non px-4 " onClick={() => setColor("green")} style = {{backgroundColor: "green"}}>Green</button>
      <button className= "outline-non px-4 " onClick={() => setColor("SkyBlue")} style = {{backgroundColor: "SkyBlue"}}>SkyBlue</button>

      </div>
      </div>


      </div>
    </>
  )
}

export default App
