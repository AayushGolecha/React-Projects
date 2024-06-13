import { useFormik } from "formik";
import './App.css';
import * as Yup from 'yup';

const Form=()=>{
    const formik=useFormik({
        initialValues:{
            email:"",
            password:"",
        }, validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required')
            .matches(/[0-9]/, 'Password requires a number')
            .matches(/[a-z]/, 'Password requires a lowercase letter')
            .matches(/[A-Z]/, 'Password requires an uppercase letter')
            .matches(/[^\w]/, 'Password requires a symbol').min(8, 'Password must be 8 characters long'),
          }), onSubmit: (value,{resetForm})=>{
            localStorage.setItem('Credentials1', JSON.stringify(value))
            resetForm()
        }
    })
    return(
        <form className="form" onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input id="email" type="text" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
            {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}/>
            {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
            <button type="submit">Submit</button>
        </form>
    )
}
export default Form