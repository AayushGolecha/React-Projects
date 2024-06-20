import './style.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { getData,deleteData } from '../services/apiclient';

const Read = ({setFirstName, setLastName}) => {
    const navigate = useNavigate()
    const [val, setVal] = useState([])
    const [update, setUpdate]=useState(false)
    const handleDelete=()=>{
        setUpdate(true)
        console.log(update)
    }
    const fetchData = async () => {
        const response = await getData()
        setVal(response);
        setUpdate(false)
    };
    useEffect(() => {
        fetchData();
    }, [update]);
    
    const handleUpdate = () => {
        navigate('/update')
    }
    const handleCreate = () => {
        navigate('/create')
        setFirstName('')
        setLastName('')
    }
    const setData = (data) => {
        localStorage.setItem('ID',JSON.stringify(data.id))
        localStorage.setItem('firstName',JSON.stringify(data.firstName))
        localStorage.setItem('lastName',JSON.stringify(data.lastName))
    }
    return (
        <div className='read'>
            <h1>Read Data</h1>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {val.map((data) => {
                        return (
                            <tr>
                                <td>{data.firstName}</td>
                                <td>{data.lastName}</td>
                                <td><button className='green' onClick={() => { handleUpdate(); setData(data) }}>Update</button></td>
                                <td><button className='delete' onClick={()=>{deleteData(data.id);handleDelete()}}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button className='add' onClick={handleCreate}>Add New User</button>
        </div>
    )
}
export default Read