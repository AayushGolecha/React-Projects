import MainLayout from "../components/MainLayout"
import { Product } from "../components/Product"
import './style.css'
import { useParams } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const ProductPage = ({ isLogged, setIsLogged, setId, count, setCount, setAdd }) => {
  const { name } = useParams()
  return (
    <MainLayout isLogged={isLogged} setIsLogged={setIsLogged} count={count} setCount={setCount} name={name}>
      <div className='product-section'>
        <Product isLogged={isLogged} setId={setId} count={count} setCount={setCount} setAdd={setAdd} name={name} />
      </div>
    </MainLayout>
  )
}
export default ProductPage