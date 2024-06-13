import React, { useState, useEffect } from 'react';

const Changer = () => {
    const [value, setValue] = useState()
    const [color, setColor] = useState('')
    const handle1 = (e) => {
        setValue(e.target.value)
        console.log(value)
    }
    const handle2 = (e) => {
        setColor(e.target.value)
        console.log(color)
    }
    useEffect(() => {
        const interval = setInterval(() => {
            document.body.style.backgroundColor=color
        },value)
        return () => clearInterval(interval);
    },[color, value])
    return (
        <>
            <label style={{margin:"20px"}}>
                Delay: <input type="text" value={value} onChange={handle1} />
                <p>Current Delay: {value}</p>
            </label>
            <label>
                Color: <input type="text" value={color} onChange={handle2} />
            </label>
            
            <p>Current Color: {color}</p>
        </>
    );
}
export default Changer;