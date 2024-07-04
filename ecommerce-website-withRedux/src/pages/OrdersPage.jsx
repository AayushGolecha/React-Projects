import MainLayout from "../components/MainLayout"
import './style.css'
import { useParams } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const OrdersPage = ({ isLogged, setIsLogged, searchVal, setSearchVal, list, setList }) => {
  const { name } = useParams()
  return (
    <MainLayout isLogged={isLogged} setIsLogged={setIsLogged} name={name} searchVal={searchVal} setSearchVal={setSearchVal} list={list} setList={setList} >
      <div className='orders'>
        Orders
      </div>
    </MainLayout>
  )
}
export default OrdersPage