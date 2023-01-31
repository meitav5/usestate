import { useState } from "react";
function Counter(props) {
    const {delta, maxCounter} = props
    const [count, setCount] = useState(1);
    function incrs(){
        setCount(
            function(oldCount){
              if (oldCount + delta > maxCounter) return 0
              return oldCount + delta
            }
        )
    }
    function reset(){
        setCount(
          function(oldCount){
            return oldCount + delta
          }
        )
    }
    return (
      <div className="App">
        <h1>Counter</h1>
        <p>Counter is at {count}</p>
        <button onClick={incrs}>Click to add {delta}</button>
        <button onClick={reset}>Click to reset</button>
      </div>
    );
  }
  
  export default Counter;