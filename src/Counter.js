import { useState } from "react";
function Counter() {
    const [count, setCount] = useState(1);
    function incrs(){
        setCount(
            function(oldCount){
                return oldCount + 1
            }
        )
    }
    function reset(){
        setCount(0)
    }
    return (
      <div className="App">
        <h1>Counter</h1>
        <p>Counter is at {count}</p>
        <button onClick={incrs}>Click to add 1</button>
        <button onClick={reset}>Click to reset</button>
      </div>
    );
  }
  
  export default Counter;