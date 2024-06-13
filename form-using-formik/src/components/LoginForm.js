import { Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react';

const LoginForm = () => {
    const validate = (value) => {
        const error = {}
        if (!value.email) {
            error.email = "Required"
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.email)) {
            error.email = "Invalid Email Address";
        }
        if (!value.password) {
            error.password = "Required"
        } else if (!/^(?=.*[0-9])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/.test(value.password)) {
            error.password = "Too Weak Password";
        }
        return error
    }
    const handleSubmit = (value, setSubmitting, resetForm) => {
        setTimeout(() => {
            localStorage.setItem('Credentials', JSON.stringify(value))
            setSubmitting(false)
            resetForm()
        }, 1000)
    }
    return (
        <Formik initialValues={{ email: '', password: '' }} validate={values => validate(values)} onSubmit={(values, { setSubmitting },{resetForm}) => handleSubmit(values, setSubmitting, resetForm)}>
            {({ isSubmitting, resetForm }) => (
                <Form style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '400px', alignItems: 'center' }}>
                    <label htmlFor="email">Email Address:</label>
                    <Field id="email" style={{ fontSize: "1.25rem" }} type='text' name='email' placeholder='Enter your email' />
                    <ErrorMessage name='email' component='span' />
                    <label htmlFor="pass">Password:</label>
                    <Field id="pass" style={{ fontSize: "1.25rem" }} type='password' name='password' placeholder='Enter your password' />
                    <ErrorMessage name='password' component='span' />
                    <button style={{ width: '100px', fontSize: "1.25rem" }} type='submit' disabled={isSubmitting}>Submit</button>
                    <button style={{ marginBottom: '30px', width: '100px', fontSize: "1.25rem" }} onClick={resetForm}>Reset</button>
                </Form>
            )}
        </Formik>
    );
}

export default LoginForm