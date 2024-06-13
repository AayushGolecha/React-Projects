import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default function Count() {
  const [count, setCount] = useState(0)
  function increment() {
    if(count<10){setCount(count+1)}
    else{alert("Count cannot be more than 10")}
    
  }
  
  function decrement() {
    if(count>0){

      setCount(count-1)
    }
    else{
      alert("Count cannot be negative")
    }
  }
  return (
    <div  style={{backgroundColor:"aqua"}} className="box">
      <div>
        <button className="In" onClick={increment}>Increment</button>
        <button className="Dec" onClick={decrement}>Decrement</button>
      </div>
      <div className='count'>Count : {count}</div>
    </div>
  );
}
