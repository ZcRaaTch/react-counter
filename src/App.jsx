import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  function addVal() {
    setCounter(counter + 1);
  }
  function removeVal() {
    setCounter(counter - 1);
  }
  return (
    <>
      <h1>Counter : {counter}</h1>
      <button onClick={addVal}>Add</button>
      <button onClick={removeVal}>Reamove</button>
    </>
  );
}

export default App;
