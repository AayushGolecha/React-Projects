import React,{useState, useEffect} from 'react';
import './App.css';

function App() {
  const [time, setTime]=useState(0)
  const [active, setActive]=useState(false)

  const handle=()=>{
    setActive(!active)
  }

  useEffect(()=>{
    let change;
    if(active){
      change=setInterval(()=>{
        setTime((time)=>time+10)
      },10)
    }
    else if(!active){
      clearInterval(change)
    }
    return ()=>clearInterval(change)
  },[active])

  const reset=()=>{
    setTime(0)
  }
  const milliseconds=("0" + ((time / 10) % 100)).slice(-2)
  const seconds=("0" + Math.floor((time / 1000) % 60)).slice(-2)
  const minute=("0" + Math.floor((time / 60000) % 60)).slice(-2)
  const hour=("0" + Math.floor((time / 3600000) % 60)).slice(-2)
  return (
    <div className="App">
      <div>{hour}:{minute}:{seconds}:{milliseconds}</div>
      <div className='flex'>
        <button style={{backgroundColor:"red"}} onClick={handle}>{active ? "Stop":"Start"}</button>
        <button style={{backgroundColor:"blue"}} onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
