import { useParams } from "react-router-dom"

const CheckoutPage = () => {
    let cart = JSON.parse(localStorage.getItem('carts')) || []
    const { name } = useParams()
    let total = 0
    if(cart != null){
        for (let i = 0; i < cart.length; i++) {
            let item = cart[i]
            let amount = item.Quantity * item.price
            total += amount
        }
    }
    let nfObject = new Intl.NumberFormat('en-IN');
    let output = nfObject.format(total);
    return (
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
    )
}
export default CheckoutPage