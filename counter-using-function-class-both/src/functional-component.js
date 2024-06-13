import './App.css';
import React, { useState } from 'react';

function Count() {
  const [count, setCount] = useState(0)
  const increment=()=>{
    setCount(count+1)
  }
  const decrement=()=>{
    if(count>0){setCount(count-1)}
    else{alert("Count cannot be negative")}
  }
  return (
    <div className="App" >
      <h2>Functional Component</h2>
      <div className='posi'>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <h2>Count is {count}</h2>
    </div>
  );
}

export default Count;