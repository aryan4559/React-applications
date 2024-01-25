import { useState } from 'react';
import './App.css'

function App() {
// useState Hook

// Used to reflect  the value in UI
let [counter, setCounter] = useState(15)

  let addValue = () => {
    if(counter == 20){
      setCounter(counter);
    }
    else {
      counter++;
      setCounter(counter);
    }
  }
  let remoValue = () => {
    if(counter == 0){
      setCounter(counter);
    }
    else{
      counter--;
      setCounter(counter);
    }
  }


  return (
    <div>

    <h1>Chai or react</h1>
    <h2>Counter Value: {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <br />
    <button onClick = {remoValue}>Remove Value</button>

    </div>

  )
}

export default App
