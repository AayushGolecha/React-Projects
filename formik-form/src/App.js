import './App.css';
import './components/style.css';
import Form from './components/Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/HomePage'
import * as Yup from 'yup';

function App(props) {
  let users = JSON.parse(localStorage.getItem('User-Details')) || [];

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
        <Route path='/' element={<Form validationSchema={validationSchema} users={users} />} />
        <Route path='/home' element={<Home validationSchema={validationSchema} users={users} />} />
      </Routes>
    </BrowserRouter>

  );
}
export default App;