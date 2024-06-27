import MainLayout from "../components/MainLayout"
import { Product } from "../components/Product"
import './style.css'

// eslint-disable-next-line react/prop-types
const ProductPage = ({isLogged, setIsLogged, setId}) => {
  return (
    <MainLayout isLogged={isLogged} setIsLogged={setIsLogged}>
      <div className='product-section'><Product isLogged={isLogged} setId={setId} /></div>
    </MainLayout>
  )
}

export default ProductPage