import MainLayout from "../components/MainLayout"
import './style.css'
import { useParams } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const CartPage = ({ isLogged, setIsLogged, count, setCount, setQuantity, quantity }) => {
    const { name } = useParams()
    const cart = JSON.parse(localStorage.getItem('carts'))
    const handleRemove = (id) => {
        let newCart = cart.filter((cart) => cart.id !== id)
        localStorage.setItem('carts', JSON.stringify(newCart))
        setCount(count - 1)
        setQuantity(1)    
    }
    return (
        <MainLayout isLogged={isLogged} setIsLogged={setIsLogged} count={count} setCount={setCount} name={name}>
            <div className="cartpage">
                <h1 style={{ margin: '30px auto', width: '350px', fontSize: '3.5rem' }}>Product Cart</h1>
                {isLogged ? <div className="product-cart">{cart.map((cart) => (
                    <div key={cart.id} className='cartbox'>
                        <img src={cart.imageUrl} alt="Product" />
                        <div className='cartbox-1'>
                            <span>{cart.name}</span>
                            <span>₹{cart.price}</span>
                            <span>Quantity: {cart.Quantity}</span>
                            <button className="remove" onClick={() => handleRemove(cart.id)}>Remove</button>
                        </div>
                    </div>
                ))}</div> : <p style={{ width: '180px', margin: 'auto', fontSize: '2rem' }}>Empty Cart!</p>}
            </div>
        </MainLayout>
    )
}
export default CartPage