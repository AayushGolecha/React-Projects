import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useState } from 'react';
import eye from './eye.png';
import hidden from './hidden.png';
import { useNavigate, Link } from 'react-router-dom';
import { Msg } from './message';

// eslint-disable-next-line react/prop-types
const Register = ({initialValue, validationSchema, users}) => {
    const [check, setCheck] = useState(false);
    const [img, setImg] = useState(false)
    const handleToggle = () => {
        setImg(!img)
    }
    const navigate = useNavigate()
    const handleSubmit = (value, setSubmitting) => {
        // eslint-disable-next-line react/prop-types
        users.push(value)
        localStorage.setItem('User-Data', JSON.stringify(users))
        setCheck(true)
        setTimeout(() => {
            setCheck(false)
            setSubmitting(false)
            navigate('/login')
            //setCheck(true)
        }, 2000)
    }
    return (
        <div className='main'>
            <h1 style={{margin:'0px'}}>Register</h1>
            <p>Already have a account? <Link to={'/login'}>Login</Link></p>
            <Formik initialValues={initialValue} validationSchema={() => validationSchema} onSubmit={(values, { setSubmitting }) => { handleSubmit(values, setSubmitting) }}>
                {({ isSubmitting, resetForm }) => (
                    <Form className='form'>
                        <label htmlFor="fullname">Full Name:</label>
                        <Field className="size" id="fullname" type='text' name='fullname' placeholder='Enter your name' />
                        <ErrorMessage className="red" name='fullname' component='span' />
                        <label htmlFor="email">Email Address:</label>
                        <Field className="size" id="email" type='text' name='email' placeholder='Enter your email' />
                        <ErrorMessage className="red" name='email' component='span' />
                        <label htmlFor="password">Password:</label>
                        <Field className="size pos" id="password" type={img ? "text" : "password"} name='password' placeholder='Enter password' />
                        {img ? <img className='img1' src={hidden} alt="Logo" onClick={handleToggle} /> : <img className='img1' src={eye} alt="Logo" onClick={handleToggle} />}
                        <ErrorMessage className="red" name='password' component='span' />
                        <div className='btn'>
                            <button type='submit' disabled={isSubmitting}>Submit</button>
                            <button type='reset' onClick={resetForm}>Reset</button>
                        </div>
                    </Form>
                )}
            </Formik>
            {check ? <Msg message="Sign up Successfull!" /> : []}
        </div>
    )
}
export default Register

