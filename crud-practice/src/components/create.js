import './style.css';
import { useNavigate } from 'react-router-dom';
import { postData } from '../services/apiclient';

const Create = ({ firstName, lastName, setFirstName, setLastName }) => {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault()
        await postData(firstName, lastName)
        navigate('/')
    }
    return (
        <div className='create'>
            <h1>Create Form</h1>
            <form onSubmit={handleSubmit}>
                <label>First Name:
                    <input onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                </label>
                <label>Last Name:
                    <input onChange={(e) => setLastName(e.target.value)} value={lastName} />
                </label>
                <button type='submit' className='green'>Submit</button>
            </form>
        </div>
    )
}
export default Create