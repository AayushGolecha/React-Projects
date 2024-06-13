import './App.css';
import './components/style.css';
import Register from './components/Registerpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Homepage'
import * as Yup from 'yup';
import { useState } from "react";

function App() {
  let users = JSON.parse(localStorage.getItem('User-Data')) || [];
  const initialValue = { fullname: '', email: '', dob: '', password: '', confirmpassword: '' }
  const [check, setCheck] = useState(false);
  console.log(check)
  
  // the validation schema for validating the values
  const validationSchema = Yup.object({
    fullname: Yup.string().required('Required'),
    email: Yup.string().required('Required').matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email address'),
    dob: Yup.date().required('Required').test("dob", "You must be 18 or older", (dob) => {
      const currentDate = new Date();
      currentDate.setFullYear(currentDate.getFullYear() - 18);
      return dob <= currentDate;
    }),
    password: Yup.string().required('Required')
      .matches(/[0-9]/, 'Password requires a number')
      .matches(/[a-z]/, 'Password requires a lowercase letter')
      .matches(/[A-Z]/, 'Password requires a uppercase letter')
      .matches(/[^\w]/, 'Password requires a symbol').min(10, 'Password must be 10 characters long'),
    confirmpassword: Yup.string().required('Required').oneOf([Yup.ref('password'), null], 'Passwords must match')
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register validationSchema={validationSchema} users={users} initialValue={initialValue} setCheck={setCheck} />} />
        <Route path='/home' element={<Home validationSchema={validationSchema} users={users} initialValue={initialValue} check={check} setCheck={setCheck} />} />
      </Routes>
    </BrowserRouter>

  );
}
export default App;