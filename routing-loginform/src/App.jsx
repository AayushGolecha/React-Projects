import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './components/registerpage'
import Login from './components/loginpage'
import Home from './components/homepage'
import * as Yup from 'yup';
import './App.css'

function App() {
  let users = JSON.parse(localStorage.getItem('User-Data')) || [];
  const initialValue = { fullname: '', email: '', password: ''}
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
      <>
        <Routes>
          <Route path='/' element={<Register initialValue={initialValue} validationSchema={validationSchema} users={users}/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/home/:name' element={<Home />} />
        </Routes>
      </>
    </Router>
  )
}
export default App