import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useState } from 'react';
import eye from './eye.png';
import hidden from './hidden.png';
import { useNavigate, Link } from 'react-router-dom';
import { Msg } from './message';
import * as Yup from 'yup';

const Login = () => {
    const initialValue = { email: '', password: '' }
    const navigate = useNavigate()
    const [check, setCheck] = useState(false);
    const [check1, setCheck1] = useState(false);
    const [img, setImg] = useState(false)
    let data = JSON.parse(localStorage.getItem('User-Data'))
    const handleToggle = () => {
        setImg(!img)
    }
    const validationSchema = Yup.object({
        email: Yup.string().required('*Required').matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, '*Invalid email address'),
        password: Yup.string().required('*Required')
            .matches(/[0-9]/, '*Password requires a number')
            .matches(/[a-z]/, '*Password requires a lowercase letter')
            .matches(/[A-Z]/, '*Password requires a uppercase letter')
            .matches(/[^\w]/, '*Password requires a symbol').min(10, '*Password must be 10 characters long'),
    })
    const handleSubmit = (values, setSubmitting) => {
        let existsUser = data.find((e) => (e.email === values.email && e.password === values.password))
        console.log(existsUser)
        if (existsUser) {
            setCheck(true)
            setCheck1(false)
            setTimeout(() => {
                setCheck(false)
                navigate(`/home/${existsUser.fullname}`)
                setCheck(true)
            }, 2000)
        }
        else {
            setCheck1(true)
        }
        setSubmitting(false)
    }
    return (
        <div className='main'>
            <h1 style={{ margin: '0px' }}>Login</h1>
            <p>Dont have a account? <Link to={'/'}>Sign-up</Link></p>
            <Formik initialValues={initialValue} validationSchema={() => validationSchema} onSubmit={(values, { setSubmitting }) => { handleSubmit(values, setSubmitting) }}>
                {({ isSubmitting, resetForm }) => (
                    <Form className='form'>
                        <label htmlFor="email">Email Address:</label>
                        <Field className="size" id="email" type='text' name='email' placeholder='Enter your email' />
                        <ErrorMessage className="red" name='email' component='span' />
                        <label htmlFor="password">Password:</label>
                        <Field className="size pos" id="password" type={img ? "text" : "password"} name='password' placeholder='Enter password' autoComplete="on" />
                        {img ? <img className='img2' src={hidden} alt="Logo" onClick={handleToggle} /> : <img className='img2' src={eye} alt="Logo" onClick={handleToggle} />}
                        <ErrorMessage className="red" name='password' component='span' />
                        <div className='btn'>
                            <button type='submit' disabled={isSubmitting}>Login</button>
                            <button type='reset' onClick={resetForm}>Reset</button>
                        </div>
                    </Form>
                )}
            </Formik>
            {check ? <Msg message="Login Success!" /> : []}
            {check1 ? <Msg message="Incorrect Email/Password!" /> : []}
        </div>
    )
}

export default Login