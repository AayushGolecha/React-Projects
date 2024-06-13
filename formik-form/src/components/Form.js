import { useFormik } from "formik";
import { useState } from "react";
import './style.css';
import { Input, Btn, Msg } from "./inputs";
import { useNavigate } from 'react-router-dom';

const Form = (props) => {
    const [check, setCheck] = useState(false);
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            fullname: "",
            email: "",
            dob: "",
            password: "",
            confirmpassword: ""
        }, validationSchema: props.validationSchema,
        onSubmit: (value) => {
            props.users.push(value)
            localStorage.setItem('User-Details', JSON.stringify(props.users))
            setCheck(true)
            setTimeout(() => {
                setCheck(false)
                navigate('/home')
            }, 2000)
        }
    })
    return (
        <div className="main">
            <h1>Registration Form</h1>
            <form className="form" onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
                <Input formik={formik} id={"Fullname"} value={formik.values.fullname} name={"fullname"} type={"text"} placeholder={"Enter your name"} touched={formik.touched.fullname} error={formik.errors.fullname} />
                <Input formik={formik} id={"Email"} value={formik.values.email} name={"email"} type={"text"} placeholder={"Enter your email"} touched={formik.touched.email} error={formik.errors.email} />
                <Input formik={formik} id={"Dob"} value={formik.values.dob} name={"dob"} type={"date"} placeholder={""} touched={formik.touched.dob} error={formik.errors.dob} />
                <Input formik={formik} id={"Password"} value={formik.values.password} name={"password"} type={"password"} placeholder={"Enter your password"} touched={formik.touched.password} error={formik.errors.password} />
                <Input formik={formik} id={"Confirm-password"} value={formik.values.confirmpassword} name={"confirmpassword"} type={"password"} placeholder={"Enter your name"} touched={formik.touched.confirmpassword} error={formik.errors.confirmpassword} />
                <div className="btn">
                    <Btn class={"btn1"} type={"submit"} name={"Submit"} />
                    <Btn class={"btn2"} type={"reset"} name={"Reset"} />
                </div>
            </form>
            {check ? <Msg message="Sign up Successfull!" /> : []}
        </div>
    );
}
export default Form