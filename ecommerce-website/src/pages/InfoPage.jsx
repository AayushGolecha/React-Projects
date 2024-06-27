import MainLayout from "../components/MainLayout"
import { getProduct } from '../services/apiclient';
import { useEffect, useState, useCallback } from 'react';

// eslint-disable-next-line react/prop-types
const InfoPage = ({ isLogged, setIsLogged, id }) => {
    const [data, setData] = useState([])
    const fetchData = useCallback(async () => {
        const response = await getProduct(id)
        setData(response)
    },[id])
    useEffect(() => {
        fetchData()
    }, [fetchData])
    return (
        <MainLayout isLogged={isLogged} setIsLogged={setIsLogged}>
            <h1 style={{ margin: '30px auto', width:'600px', fontSize:'3.5rem'}}>Product Description</h1>
            <div key={data.id} className='product' >
                <img src={data.imageUrl} alt="Product" />
                <div>
                    <div className='product1'>
                        <span>{data.name}</span>
                        <span>₹{data.price}</span>
                    </div>
                    <div className='product2'>
                        <button className='green' >Buy Now</button>
                        <button className='delete' >Add to cart</button>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
export default InfoPage