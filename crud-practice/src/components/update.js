import './style.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { putData } from '../services/apiclient';

const Update = ({ firstName, lastName, setFirstName, setLastName }) => {
    const [id, setId] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        setId(JSON.parse(localStorage.getItem('ID')))
        setFirstName(JSON.parse(localStorage.getItem('firstName')))
        setLastName(JSON.parse(localStorage.getItem('lastName')))
    }, [setFirstName,setLastName])
    const handleUpdate = () => {
        localStorage.setItem('firstName', JSON.stringify(firstName))
        localStorage.setItem('lastName', JSON.stringify(lastName))
        navigate('/')
    }
    return (
        <div className='create'>
            <h1>Update Form</h1>
            <form>
                <label>First Name:
                    <input onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                </label>
                <label>Last Name:
                    <input onChange={(e) => setLastName(e.target.value)} value={lastName} />
                </label>
                <button className='green' onClick={() => { handleUpdate(); putData(id) }}>Update</button>
            </form>
        </div>
    )
}
export default Update