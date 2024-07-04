import { useNavigate, useParams } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { pay } from "../redux/countSlice"
import { useState } from "react"

const CheckoutPage = () => {
    let cart = JSON.parse(localStorage.getItem('carts')) || []
    const { name } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [check, setCheck] = useState(false)
    let total = 0
    if (cart != null) {
        for (let i = 0; i < cart.length; i++) {
            let item = cart[i]
            let amount = item.Quantity * item.price
            total += amount
        }
    }
    let nfObject = new Intl.NumberFormat('en-IN');
    let output = nfObject.format(total);
    const handlePay = () => {
        setCheck(true)
        document.getElementsByClassName('order-confirm')[0].style.display = 'block';
        setTimeout(() => {
            navigate(`/${name}`)
            dispatch(pay())
            let cart = []
            localStorage.setItem('carts', JSON.stringify(cart))
            setCheck(false)
        }, 1500)
    }
    return (
        <>
            {check ? '' : <div className="check">
                <div className="order-box">
                    <h2 className="greet">Thank for your Order, {name}!</h2>
                    <hr />
                    <div className="order-details">
                        <div className="receipt">
                            <h3 style={{ color: "#a8729a" }}>Receipt</h3>
                            <h3>Total Items: {cart.length}</h3>
                        </div>
                        {cart.map((cart) => (
                            <div className="item" key={cart.id}>
                                <img src={cart.imageUrl} alt="product image" />
                                <div className="data">
                                    <span>{cart.name}</span>
                                    <span>Qty: {cart.Quantity}</span>
                                    <span>₹{cart.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <hr />
                    <h2 className="paid">Total Amount: ₹{output}</h2>
                </div>
                <button className="pay-btn" onClick={handlePay}>Pay Now</button>
            </div>}
            <div className="order-confirm">
                <h1>Order Confirmed</h1>
                <img src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png" />
            </div>
        </>
    )
}
export default CheckoutPage