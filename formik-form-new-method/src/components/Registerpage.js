import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useState } from "react";
import './style.css';
import { useNavigate } from 'react-router-dom';
import { Msg } from './message'

const Register = (props) => {
    const [check, setCheck] = useState(false);
    const navigate = useNavigate()
    const handleSubmit = (value, setSubmitting) => {
        props.users.push(value)
        localStorage.setItem('User-Data', JSON.stringify(props.users))
        setCheck(true)
        setTimeout(() => {
            setCheck(false)
            setSubmitting(false)
            navigate('/home')
            props.setCheck(true)
        }, 2000)
    }
    return (
        <div className='main'>
            <h1>Registration Form</h1>
            <Formik initialValues={props.initialValue} validationSchema={() => props.validationSchema} onSubmit={(values, { setSubmitting }) => { handleSubmit(values, setSubmitting) }}>
                {({ isSubmitting, resetForm }) => (
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
                        <Field className="size" id="password" type='password' name='password' placeholder='Enter password' />
                        <ErrorMessage name='password' component='span' />
                        <label htmlFor="confirmpassword">Confirm Password:</label>
                        <Field className="size" id="confirmpassword" type='password' name='confirmpassword' placeholder='Confirm password' />
                        <ErrorMessage name='confirmpassword' component='span' />
                        <div className='btn'>
                            <button className="btn1" type='submit' disabled={isSubmitting}>Submit</button>
                            <button className='btn2' type='reset' onClick={resetForm}>Reset</button>
                        </div>
                    </Form>
                )}
            </Formik>
            {check ? <Msg message="Sign up Successfull!" /> : []}
        </div>
    );
}
export default Register