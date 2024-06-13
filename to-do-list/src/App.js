import './App.css';
import React, { useState,useEffect } from 'react';
import Box from './components/inputbox'
import Task from './components/todo-box'
import Edit from './components/editbutton';

function App() {
  
  const [userInput, setUserInput] = useState('')
  const [tasks, setTasks] = useState([])
  const [check, setCheck] = useState(false)
  const [dataFromTask, setDataFromTask] = useState(0);

  // gets the index value from todo-box.js
  function handleDataFromTask(i) {
    setDataFromTask(i);
  }

  // This hook checks if there is any tasks present in localstorage 
  // it will written that else return an empty array
  useEffect(()=>{
    const values = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(values)
  },[])

  return (
    <div className="App">
      <h1>TO-DO-LIST</h1>
      <div className='bod'></div>
      <>{check ? <Edit userInput={userInput} setUserInput={setUserInput} setCheck={setCheck} check={check} val={dataFromTask} tasks={tasks} setTasks={setTasks}/>:<div><Box userInput={userInput} setUserInput={setUserInput} tasks={tasks} setTasks={setTasks} />
      <Task tasks={tasks} setTasks={setTasks} check={check} setCheck={setCheck} sendData={handleDataFromTask}/></div>}</>
    </div>
  );
}

export default App;
