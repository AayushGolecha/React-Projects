import './style.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import { getData, deleteData } from '../services/apiclient';

const Read = ({ setFirstName, setLastName }) => {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [update, setUpdate] = useState(false)
    const fetchData = useCallback(async () => {
        const response = await getData()
        setData(response)
        setUpdate(false)
    }, [])
    useEffect(() => {
        fetchData()
    }, [fetchData, update])
    const handleDelete = async (id) => {
        await deleteData(id)
        setUpdate(true)
    }
    const handleUpdate = (data) => {
        localStorage.setItem('ID', JSON.stringify(data.id))
        localStorage.setItem('firstName', JSON.stringify(data.firstName))
        localStorage.setItem('lastName', JSON.stringify(data.lastName))
        navigate('/update')
    }
    const handleCreate = () => {
        setFirstName('')
        setLastName('')
        navigate('/create')
    }
    return (
        <div className='read'>
            <h1>Read User Data</h1>
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                {data.map((data) => (
                    <tr key={data.id}>
                        <td>{data.firstName}</td>
                        <td>{data.lastName}</td>
                        <td><button className='green' onClick={() => { handleUpdate(data) }}>Update</button></td>
                        <td><button className='delete' onClick={() => handleDelete(data.id)}>Delete</button></td>
                    </tr>
                ))}
            </table>
            <button className='add' onClick={handleCreate}>Add New User</button>
        </div>
    )
}
export default Read