import Counter from './Counter';
import './App.css';
import { useState } from "react";


function App() {
  const [maxCounter, setMaxCounter] = useState(10);
  const [delta, setDelta] = useState(1);
  function handleDelta(e){
    setDelta(Number(e.target.value))
}
function handleMax(e){
  setMaxCounter(Number(e.target.value))
}
  return (
    <div className="App">
      usestate
      <input type = "number" value = {delta} onChange = {handleDelta}/>
      <input type = "number" value = {maxCounter} onChange = {handleMax}/>
      <Counter delta = {delta} maxCounter = {maxCounter}/>
      <Counter delta = {delta} maxCounter = {maxCounter}/>
    </div>
  );
}

export default App;
