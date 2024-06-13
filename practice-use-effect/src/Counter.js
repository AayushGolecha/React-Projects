import './App.css';
import React, { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(1)
    const [check1, setCheck1] = useState(false)
    const [check2, setCheck2] = useState(false)
    useEffect(() => {
        if (setCheck1) {
            let timer=setTimeout(() => {
                setCount(count+1)
            }, 1)
            return ()=>clearTimeout(timer)
        }
        
    }, [check1])
    useEffect(() => {
        if(count>0){
            if (setCheck2) {
                setTimeout(() => {
                    setCount(count - 1)
                }, 1)
            }
        }
        else{
            alert("Count Cannot be negative")
        }
    }, [check2])
    const increment = () => {
        setCheck1(!check1)
    }
    const decrement = () => {
        setCheck2(!check2)
    }
    return (
        <div>
            <div>
                <button style={{fontSize:"1.5rem"}} onClick={increment}>Increment</button>
                <button style={{fontSize:"1.5rem"}} onClick={decrement}>Decrement</button>
            </div>
            <h2>Count is {count}</h2>
        </div>
    );
}

export default Counter;