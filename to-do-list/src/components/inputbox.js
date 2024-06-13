import React from 'react'
import './App.css';
import { useState,useEffect } from 'react';
import Msg from './message'

const Box = (props) => {
    const [check, setCheck] = useState(false)

    // This function handles the input task and set userInput
    const handleInput = (e) => {
        props.setUserInput(e.target.value)
    }

    // For adding the task in to-do-list
    const addTask = (e) => {
        e.preventDefault()
        if (props.userInput !== "") {
            const updated = [...props.tasks, props.userInput]
            props.setTasks(updated)
            localStorage.setItem('tasks', JSON.stringify(updated));
            props.setUserInput("")
        }
        else {
            setCheck(!check)
        }
    }

    // checks the input field if empty gives error
    useEffect(()=>{
        if(props.userInput !== ""){
            setCheck(false)
        }
    },[props.userInput])

    return (
        <>
            <div className='flex'>
                <div className='flex1'>
                    <input type='text' placeholder='Enter the task' value={props.userInput} onChange={handleInput} />
                    <div>{check ? <Msg /> : []}</div>
                </div>
                <button className='blue' onClick={addTask}>Add</button>
            </div>
        </>
    )
}
export default Box