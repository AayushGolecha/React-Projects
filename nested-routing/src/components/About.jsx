/* eslint-disable react/prop-types */
import { useState } from 'react'
import {Link, Outlet} from 'react-router-dom'

const About = ({ data, setData }) => {
    const [check, setCheck]=useState(true)
    return (
        <div className='box'>
            <h1>About</h1>
            <p>This is a About page</p>
            <input type="text" value={data} onChange={(e) => {setData(e.target.value);setCheck(false)}} />
            <div className='new'>
                <button onClick={()=>setCheck(true)}><Link to={`address/${data}`}>Address</Link></button>
                <button onClick={()=>setCheck(true)}><Link to={`contact/${data}`}>Contact</Link></button>
            </div>
            {check ? <Outlet context={[data]}/>:[]}
        </div>
    )
}

export default About