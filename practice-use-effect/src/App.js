
import './App.css';
import { useState, useEffect } from 'react';
import Counter from './Counter'
import Changer from './color-changer'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1)
    }, 2000)
  }, [])
  return (
    <div className='App'>
      <h1>I have runned {count} times.</h1>
      <Counter />
      <Changer />
    </div>
  );
}

export default App;
