import './style.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import { getData, deleteData } from '../services/apiclient';

const ProductPage = ({ setPrice, setName, setImageUrl }) => {
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
        localStorage.setItem('Id', JSON.stringify(data.id))
        localStorage.setItem('Name', JSON.stringify(data.name))
        localStorage.setItem('Price', JSON.stringify(data.price))
        localStorage.setItem('Image Url', JSON.stringify(data.imageUrl))
        navigate('/update')
    }
    const handleCreate = () => {
        setName('')
        setPrice('')
        setImageUrl('')
        navigate('/add')
    }
    return (
        <div className='read'>
            <h1>Product Page</h1>
            <div className='product'>
                {data.map((data) => (
                    <div key={data.id} className='pro'>
                        <img src={data.imageUrl} alt="Product" />
                        <div className='pro1'>
                            <span>{data.name}</span>
                            <span>₹{data.price}</span>
                        </div>
                        <div className='pro1'>
                            <button className='green' onClick={() => { handleUpdate(data) }}>Update</button>
                            <button className='delete' onClick={() => handleDelete(data.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            <button className='add' onClick={handleCreate}>Add New Products</button>
        </div>
    )
}
export default ProductPage