import { useState, forwardRef, useImperativeHandle } from "react";

const Child = forwardRef((props, ref) => {
    let [products, setProducts] = useState(null)
    useImperativeHandle(ref, () => ({
        data() {
            fetch('https://fakestoreapi.com/products/')
                .then(res => res.json())
                .then((product) => setProducts(product))
        }
    }));
    const handleClick = () => {
        setProducts(null)
    }
    return (
        <>
            <button onClick={handleClick}>Remove Data</button>
            {products && products.map((e) => {
                return <p>{e.title}</p>;
            })}
        </>
    )
})
export default Child