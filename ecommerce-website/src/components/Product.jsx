import { useNavigate } from 'react-router-dom';
import { getData } from '../services/apiclient';
import { useEffect, useState, useCallback } from 'react';

// eslint-disable-next-line react/prop-types
export const Product = ({ isLogged, setId, count, setCount, name, setQuantity, quantity }) => {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    const fetchData = useCallback(async () => {
        const response = await getData()
        setData(response)
    }, [])
    useEffect(() => {
        fetchData()
    }, [fetchData])
    const handleBuy = (e, data) => {
        e.stopPropagation();
        if (isLogged) {
            setCount(count + 1)
            let storage = JSON.parse(localStorage.getItem("carts"));
            if (storage == null) {
                storage = [];
            }
            // eslint-disable-next-line react/prop-types
            storage.push(data)
            localStorage.setItem('carts', JSON.stringify(storage))
            navigate(`/cart/${name}`)
        }
        else {
            navigate('/login')
        }
    }
    const handleAdd = (e, data) => {
        e.stopPropagation();
        setCount(count + 1)
        let storage = JSON.parse(localStorage.getItem("carts"));
        if (storage == null) {
            storage = [];
        }
        let found = storage.find((storage) => storage.id === data.id)
        if (found) {
            console.log('yes')
            localStorage.setItem('carts', JSON.stringify(storage))
        }
        else {
            // eslint-disable-next-line react/prop-types
            storage.push(data)
            localStorage.setItem('carts', JSON.stringify(storage))
        }
    }
    const handlePage = (id) => {
        setId(id)
        navigate(isLogged ? `/product-info/${name}` : '/product-info')
    }
    const handleProp = (e) => {
        e.stopPropagation();
    }
    return (
        <>
            {data.map((data) => (
                <div key={data.id} className='pro' onClick={() => { handlePage(data.id) }}>
                    <img src={data.imageUrl} alt="Product" />
                    <div className='pro1'>
                        <span>{data.name}</span>
                        <span>₹{data.price}</span>
                    </div>
                    <div className='pro2'>
                        <button className='green' onClick={(e) => handleBuy(e, data)}>Buy Now</button>
                        <button className='delete' onClick={isLogged ? (e) => { handleAdd(e, data) } : (e) => handleProp(e)}>Add to cart</button>
                    </div>
                </div>
            ))}
        </>
    )
}