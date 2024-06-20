import './style.css';
import { useNavigate } from 'react-router-dom';
import { postData } from '../services/apiclient';
import { useEffect } from 'react'

const Create = ({ firstName, lastName, setFirstName, setLastName }) => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/')
    }
    useEffect(() => {
        localStorage.setItem('firstName', JSON.stringify(firstName))
        localStorage.setItem('lastName', JSON.stringify(lastName))
    }, [firstName, lastName])
    return (
        <div className='create'>
            <h1>Create Form</h1>
            <form>
                <label>First Name:
                    <input onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                </label>
                <label>Last Name:
                    <input onChange={(e) => setLastName(e.target.value)} value={lastName} />
                </label>
                <button className='green' onClick={() => { postData(); handleNavigate() }}>Submit</button>
            </form>
        </div>
    )
}
export default Create