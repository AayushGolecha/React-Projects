import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useState } from "react";
import './style.css';
import { useNavigate } from 'react-router-dom';
import { Msg } from './message'
import eye from './eye.png';
import hidden from './hidden.png';

const Home = (props) => {
    const [check, setCheck] = useState(false);
    const [img1, setImg1]=useState(false)
    const [img2, setImg2]=useState(false)
    console.log(props.check)
    const navigate = useNavigate()
    const handleLogout = () => {
        props.setCheck(false)
        navigate('/')
    }
    let details = JSON.parse(localStorage.getItem('User-Data'))
    let detail = details.pop()
    const savedValues = {
        fullname: detail.fullname, email: detail.email, dob: detail.dob, password: detail.password, confirmpassword: detail.confirmpassword
    }
    const handleSubmit = (value, setSubmitting) => {
        props.users.pop()
        setCheck(true)
        setTimeout(() => {
            props.users.push(value)
            localStorage.setItem('User-Data', JSON.stringify(props.users))
            setSubmitting(false)
            setCheck(false)
        }, 1000)
    }
    const handleToggle1=()=>{
        setImg1(!img1)
    }
    const handleToggle2=()=>{
        setImg2(!img2)
    }
    return (
        <div className='main'>
            <h1>User Details</h1>
            <Formik initialValues={props.check ? savedValues : props.initialValue} validationSchema={() => props.validationSchema} onSubmit={(values, { setSubmitting }) => { handleSubmit(values, setSubmitting) }}>
                {({ isSubmitting }) => (
                    <Form className='form'>
                        <label htmlFor="fullname">Full Name:</label>
                        <Field className="size" id="fullname" type='text' name='fullname' placeholder='Enter your name' />
                        <ErrorMessage name='fullname' component='span' />
                        <label htmlFor="email">Email Address:</label>
                        <Field className="size" id="email" type='text' name='email' placeholder='Enter your email' />
                        <ErrorMessage name='email' component='span' />
                        <label htmlFor="dob">DOB:</label>
                        <Field className="size" id="dob" type='date' name='dob' />
                        <ErrorMessage name='dob' component='span' />
                        <label htmlFor="password">Password:</label>
                        <Field className="size" id="password" type={img1 ? "text":"password"} name='password' placeholder='Enter password' />
                        {img1 ? <img className='img1' src={hidden} alt="Logo" onClick={handleToggle1}/>:<img className='img1' src={eye} alt="Logo" onClick={handleToggle1}/>}
                        <ErrorMessage name='password' component='span' />
                        <label htmlFor="confirmpassword">Confirm Password:</label>
                        <Field className="size" id="confirmpassword" type={img2 ? "text":"password"} name='confirmpassword' placeholder='Confirm password' />
                        {img2 ? <img className='img2' src={hidden} alt="Logo" onClick={handleToggle2}/>:<img className='img2' src={eye} alt="Logo" onClick={handleToggle2}/>}
                        <ErrorMessage name='confirmpassword' component='span' />
                        <button className="btn1 bt" type='submit' disabled={isSubmitting}>Save Changes</button>
                    </Form>
                )}
            </Formik>
            {check ? <Msg message="Changes Saved!" /> : []}
            <button className='btn2 space' onClick={handleLogout}>Logout</button>
        </div>
    );
}
export default Home