import MainLayout from "../components/MainLayout"
import './style.css'
import { useParams } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const CartPage = ({ isLogged, setIsLogged, count, setCount }) => {
    const { name } = useParams()
    const cart = JSON.parse(localStorage.getItem('carts')) || []
    console.log(cart)
    const handleRemove = (id) => {
        let newCart = cart.filter((cart) => cart.id !== id)
        localStorage.setItem('carts', JSON.stringify(newCart))
        let found = cart.find((item) => item.id === id)
        setCount(count - found.Quantity)
    }
    let total = 0
    let totalItems = 0
    if(cart != null){
        for (let i = 0; i < cart.length; i++) {
            let item = cart[i]
            totalItems += item.Quantity
            let amount = item.Quantity * item.price
            total += amount
        }
    }
    let nfObject = new Intl.NumberFormat('en-IN');
    let output = nfObject.format(total);
    return (
        <MainLayout isLogged={isLogged} setIsLogged={setIsLogged} count={count} setCount={setCount} name={name}>
            <div className="cartpage">
                <h1 style={{ margin: '30px auto', width: '350px', fontSize: '3.5rem' }}>Product Cart</h1>
                {isLogged ? <div className="boxes">
                    <div className="product-cart">
                        <h1 className="shopping-cart">Shopping Cart</h1>
                        {cart.map((cart) => (
                            <div key={cart.id} className='cartbox'>
                                <img src={cart.imageUrl} alt="Product" />
                                <div className='cartbox-1'>
                                    <span>{cart.name}</span>
                                    <span>₹{cart.price}</span>
                                    <span>Quantity: {cart.Quantity}</span>
                                    <button className="remove" onClick={() => handleRemove(cart.id)}>Remove</button>
                                </div>
                            </div>
                        ))}</div>
                    <div className="proceed-to-buy">
                        <h1>Cart Total</h1>
                        <div>Subtotal ({totalItems} items): ₹{output}
                        </div>
                        <button>Proceed to Buy</button>
                    </div>
                </div> : <p style={{ width: '180px', margin: 'auto', fontSize: '2rem' }}>Empty Cart!</p>}
            </div>
        </MainLayout>
    )
}
export default CartPage