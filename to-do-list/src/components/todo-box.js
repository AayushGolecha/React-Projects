import React from 'react';


const Task = (props) => {

  // Removes the to-do-task from the list
  const removeTask = (i) => {
    const newTask = props.tasks.filter((input, index) => index !== i)
    props.setTasks(newTask)
    localStorage.setItem('tasks', JSON.stringify(newTask));
  }
  
  // Opens the edit box
  const editTask = () => {
    props.setCheck(true)
  }
  
  // sends the value of index to app.js
  function handleClick(i) {
    props.sendData(i);
  }

  return (
    <div id="tasks">
      {props.tasks.map((input, index) => (
        <div className="item">
          <p>{input}</p>
          <div className="btn">
            <button className="green" onClick={() => {editTask();handleClick(index)}}>Edit</button>
            <button className="red" onClick={() => removeTask(index)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Task