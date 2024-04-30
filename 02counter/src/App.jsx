import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  let [counter, setCounter] = useState(15)
  // let counter = 15;

  const addValue = () => {
    // counter = counter + 1;
    if(counter<20){
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
    }
  }

  const removeValue = () => {
    // counter = counter + 1;
    if(counter>0){
      setCounter(counter - 1);
    }
  }



  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Increment {counter}</button>
      <button onClick={removeValue}>Decrement {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
