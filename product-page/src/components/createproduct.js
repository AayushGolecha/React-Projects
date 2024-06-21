import './style.css';
import { useNavigate } from 'react-router-dom';
import { postData } from '../services/apiclient';

const CreateProducts = ({ name, price, imageUrl, setImageUrl, setName, setPrice }) => {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault()
        await postData( name, price, imageUrl)
        navigate('/')
    }
    return (
        <div className='create'>
            <h1>Add Product</h1>
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
                <button type='submit' className='green'>ADD</button>
            </form>
        </div>
    )
}
export default CreateProducts