import { useState } from "react";
import useCount from "../hooks/useCount";

const Counter = () => {
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1)
  // }

  // const decrement = () => {
  //   setCount(count - 1)
  // }

  // const reset = () => {
  //   setCount(0)
  // }

  const [count, increment, decrement, reset] = useCount();
  const [count2, increment2, decrement2, reset2] = useCount();

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: 'tomato'
  }

  const style = {
    width: '500px',
    display: 'flex',
    justifyContent: 'space-around',
    margin: '0 auto'    
  }

  

  return (
    <div>
      <h1>Counter App</h1>
      <h3>Count: {count}</h3>
      <div style={style}>
        <button style={buttonStyle} onClick={increment}>Increase</button>
        <button style={buttonStyle} onClick={decrement}>Decrease</button>
        <button style={buttonStyle} onClick={reset}>Reset</button>
      </div>
      <h3>Count: {count2}</h3>
      <div style={style}>
        <button style={buttonStyle} onClick={increment2}>Increase</button>
        <button style={buttonStyle} onClick={decrement2}>Decrease</button>
        <button style={buttonStyle} onClick={reset2}>Reset</button>
      </div>
    </div>
  )
}

export default Counter;