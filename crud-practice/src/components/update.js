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
    }, [setFirstName, setLastName])
    const handleSubmit = async (e) => {
        e.preventDefault()
        await putData(id, firstName, lastName)
        navigate('/')
    }
    return (
        <div className='create'>
            <h1>Update User Details</h1>
            <form onSubmit={handleSubmit}>
                <label>First Name:
                    <input onChange={(e) => setFirstName(e.target.value)} value={firstName} required />
                </label>
                <label>Last Name:
                    <input onChange={(e) => setLastName(e.target.value)} value={lastName} required />
                </label>
                <button type='submit' className='green'>Update</button>
            </form>
        </div>
    )
}
export default Update