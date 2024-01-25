import { useState, useCallback, useEffect, useRef } from 'react'


function App() {

  // To track length
  const [length, setLength] = useState(8)

  // To check number checkbox
  const[number, setNumber] = useState(false)

  // To check charachter checkbox
  const[char, setChar] = useState(false)

  // Input field password
  const[pass, setPass] = useState()

  const passwordRef = useRef(null)


  // Password Generator using useCallBack for optimisation

  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str += "01234567890"
    if(char) str += "!@#$%^&*()"

    for(let i = 1; i<=length;i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPass(pass)

  }, [length, number, char, setPass])

  const copyRefToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(pass);
  },[pass])


// Calling password Generator method using useEffect Hook

  useEffect(() =>{
    passwordGenerator();
},[length, number, char, setPass])
  

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700">
      <h1 className='text-white text-center my-3'>Password Generator</h1>
    <div className = "flex shadow rounded-lg overflow-hidden mb-4">
    <input type="text"  
           value= {pass}
           className= " outline-none w-full py-1 px-3" 
           placeholder='password'
           ref = {passwordRef} 
           readOnly />
    <button 
           className = "outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0"
           onClick={copyRefToClipboard}>Copy</button>


    </div>
    <div className = "flex text-sm gap-x-2">
      <div className ="flex items-center gap-x-1" >
        <input 
            type="range" 
            min = {6}
            max ={100}
            value = {length}
            className='cursor-pointer'
            onChange={(e) => {
            setLength(e.target.value)
        }}  
        />
        <label>Length: {length}</label>
      </div>

      <div className ="flex items-center gap-x-1" >
        <input 
              type="checkbox" 
              defaultChecked={number}
              id='numberInput'
              onChange ={(e) =>{
                setNumber((prev) => !prev)
              }
              }
              /> 
          <label>Number</label>
      </div>

      <div className ="flex items-center gap-x-1" >
        <input 
              type="checkbox" 
              defaultChecked={char}
              id='charInput'
              onChange ={(e) =>{
                setChar((prev) => !prev)
              }
              }
              /> 
          <label>Char</label>
      </div>
    </div>
    </div>


  
    </>
  )
}

export default App
