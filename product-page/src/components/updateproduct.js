import './style.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { putData } from '../services/apiclient';

const UpdateProducts = ({ name, price, imageUrl, setImageUrl, setName, setPrice }) => {
    const [id, setId] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        setId(JSON.parse(localStorage.getItem('Id')))
        setName(JSON.parse(localStorage.getItem('Name')))
        setPrice(JSON.parse(localStorage.getItem('Price')))
        setImageUrl(JSON.parse(localStorage.getItem('Image Url')))
    }, [setName, setPrice, setImageUrl])
    const handleSubmit = async (e) => {
        e.preventDefault()
        await putData(id, name, price, imageUrl)
        navigate('/')
    }
    return (
        <div className='create'>
            <h1>Update User Details</h1>
            <form onSubmit={handleSubmit}>
            <label>Name:
                    <input onChange={(e) => setName(e.target.value)} value={name} required />
                </label>
                <label>Price:
                    <input onChange={(e) => setPrice(e.target.value)} value={price} required />
                </label>
                <label>Image URl:
                    <input onChange={(e) => setImageUrl(e.target.value)} value={imageUrl} required />
                </label>
                <button type='submit' className='green'>Update</button>
            </form>
        </div>
    )
}
export default UpdateProducts