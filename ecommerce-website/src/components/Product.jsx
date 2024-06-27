import { useNavigate } from 'react-router-dom';
import { getData } from '../services/apiclient';
import { useEffect, useState, useCallback } from 'react';

// eslint-disable-next-line react/prop-types
export const Product = ({isLogged, setId}) => {
    const [data, setData] = useState([])
    const navigate=useNavigate()
    const fetchData = useCallback(async () => {
        const response = await getData()
        setData(response)
    }, [])
    useEffect(() => {
        fetchData()
    }, [fetchData])
    const handleBuy = (e) => {
        e.stopPropagation();
        console.log('clicked')
    }
    const handleAdd = (e) => {
        e.stopPropagation();
        console.log('added')
    }
    const handlePage=(id)=>{
        setId(id)
        navigate('/product-info')
    }
    return (
        <>
            {data.map((data) => (
                <div key={data.id} className='pro' onClick={()=>{handlePage(data.id)}}>
                    <img src={data.imageUrl} alt="Product" />
                    <div className='pro1'>
                        <span>{data.name}</span>
                        <span>₹{data.price}</span>
                    </div>
                    <div className='pro2'>
                        <button className='green' onClick={isLogged ? (e) => handleBuy(e):''}>Buy Now</button>
                        <button className='delete' onClick={isLogged ? (e) => handleAdd(e):''}>Add to cart</button>
                    </div>
                </div>
            ))}
        </>
    )
}

