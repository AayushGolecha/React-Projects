import { useFormik } from "formik";
import { useState } from "react";
import './style.css';
import { Msg, Input, Btn } from "./inputs";
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
    const [check, setCheck] = useState(false);
    const navigate = useNavigate()
    const handleLogout = () => navigate('/')
    let details = JSON.parse(localStorage.getItem('User-Details'))
    let detail = details.pop()
    const formik = useFormik({
        initialValues: {
            fullname: detail.fullname,
            email: detail.email,
            dob: detail.dob,
            password: detail.password,
            confirmpassword: detail.confirmpassword
        },
        validationSchema: props.validationSchema,
        onSubmit: (value) => {
            props.users.pop()
            setCheck(true)
            setTimeout(() => {
                props.users.push(value)
                localStorage.setItem('User-Details', JSON.stringify(props.users))
                setCheck(false)
            }, 1000)
        }
    })
    return (
        <div className="home">
            <h1>User Details</h1>
            <form className="form" onSubmit={formik.handleSubmit}>
                <Input formik={formik} id={"Fullname"} value={formik.values.fullname} name={"fullname"} type={"text"} placeholder={"Enter your name"} touched={formik.touched.fullname} error={formik.errors.fullname} />
                <Input formik={formik} id={"Email"} value={formik.values.email} name={"email"} type={"text"} placeholder={"Enter your email"} touched={formik.touched.email} error={formik.errors.email} />
                <Input formik={formik} id={"Dob"} value={formik.values.dob} name={"dob"} type={"date"} placeholder={""} touched={formik.touched.dob} error={formik.errors.dob} />
                <Input formik={formik} id={"Password"} value={formik.values.password} name={"password"} type={"password"} placeholder={"Enter your password"} touched={formik.touched.password} error={formik.errors.password} />
                <Input formik={formik} id={"Confirm-password"} value={formik.values.confirmpassword} name={"confirmpassword"} type={"password"} placeholder={"Enter your name"} touched={formik.touched.confirmpassword} error={formik.errors.confirmpassword} />
                <Btn class={"bt"} type={"submit"} name={"Save Changes"} />
            </form>
            {check ? <Msg message="Changes Saved!" /> : []}
            <button className='space' onClick={handleLogout}>Logout</button>
        </div>
    )
}
export default Home