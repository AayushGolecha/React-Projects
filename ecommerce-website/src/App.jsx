import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import ProductPage from './pages/ProductPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import InfoPage from './pages/InfoPage'
import CartPage from './pages/CartPage'
import * as Yup from 'yup';
import { useState } from 'react'

function App() {
  const [isLogged, setIsLogged] = useState(false)
  const [id, setId] = useState(0)
  const [count, setCount] = useState(0)
  let users = JSON.parse(localStorage.getItem('User-Data')) || [];
  const initialValue = { fullname: '', email: '', password: '' }
  const validationSchema = Yup.object({
    fullname: Yup.string().required('*Required'),
    email: Yup.string().required('*Required').matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, '*Invalid email address'),
    password: Yup.string().required('*Required')
      .matches(/[0-9]/, '*Password requires a number')
      .matches(/[a-z]/, '*Password requires a lowercase letter')
      .matches(/[A-Z]/, '*Password requires a uppercase letter')
      .matches(/[^\w]/, '*Password requires a symbol').min(8, '*Password must be 8 characters long'),
  })
  return (
    <Router>
      <Routes>
        {/* Without Logged-In Routes */}
        <Route path='/' element={<ProductPage isLogged={isLogged} setIsLogged={setIsLogged} setId={setId} count={count} setCount={setCount} />} />
        <Route path='/about' element={<AboutPage isLogged={isLogged} setIsLogged={setIsLogged} count={count} />} />
        <Route path='/contact' element={<ContactPage isLogged={isLogged} setIsLogged={setIsLogged} count={count} />} />
        <Route path='/login' element={<LoginPage setIsLogged={setIsLogged} />} />
        <Route path='/product-info' element={<InfoPage isLogged={isLogged} setIsLogged={setIsLogged} id={id} count={count} setCount={setCount} />} />
        <Route path='/register' element={<RegisterPage initialValue={initialValue} validationSchema={validationSchema} users={users} />} />
        <Route path='/cart' element={<CartPage isLogged={isLogged} setIsLogged={setIsLogged} count={count} setCount={setCount} />} />

        {/* Dynamic Logged-In Routes */}
        <Route path='/:name' element={<ProductPage isLogged={isLogged} setIsLogged={setIsLogged} setId={setId} count={count} setCount={setCount} />} />
        <Route path='/about/:name' element={<AboutPage isLogged={isLogged} setIsLogged={setIsLogged} count={count} />} />
        <Route path='/contact/:name' element={<ContactPage isLogged={isLogged} setIsLogged={setIsLogged} count={count} />} />
        <Route path='/product-info/:name' element={<InfoPage isLogged={isLogged} setIsLogged={setIsLogged} id={id} count={count} setCount={setCount}/>} />
        <Route path='/cart/:name' element={<CartPage isLogged={isLogged} setIsLogged={setIsLogged} count={count} setCount={setCount}/>} />
      </Routes>
    </Router>
  )
}
export default App