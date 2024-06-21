import validator from 'validator'
import { useNavigate } from 'react-router-dom';
import { Get } from './Logindata';
import { useState, useEffect } from 'react'

const Submit = (props) => {
    const navigate = useNavigate();
    const [data, setData] = useState([])
    useEffect(() => {
        const loadData = async () => {
            const result = await Get()
            setData(result)
        }
        loadData()
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();
        let existsUser = data.find((e) => (e.email === props.email && e.password === props.password))
        if (props.email === '' && props.password === '') {
            props.setCheck1(true)
            props.setCheck2(true)
            props.setEmailValidate(false)
        }

        else if (props.email === '') {
            props.setCheck1(true)
            props.setEmailValidate(false)
        }
        else if (props.password === '') {
            if (!validator.isEmail(props.email)) {
                props.setEmailValidate(true)
                props.setCheck2(true)
            }
            else {
                props.setCheck2(true)
                props.setEmailValidate(false)
            }
        }
        else if (existsUser) {
            localStorage.setItem('email', JSON.stringify(props.email));
            localStorage.setItem('password', JSON.stringify(props.password));
            props.setCheck3(true)
            setTimeout(() => {
                navigate('/home');
            }, 1000)
        }
        else if (!existsUser) {
            if (!validator.isEmail(props.email)) {
                props.setEmailValidate(true)
            }
            else {
                props.setCheck4(true)
                props.setEmailValidate(false)
            }
        }
        else if (props.email !== '') {
            if (!validator.isEmail(props.email)) {
                props.setEmailValidate(false)
            } else {
                props.setEmailValidate(true)
            }
        }
    };
    return (
        <button type="submit" onClick={handleSubmit}>Login</button>
    );
}
export default Submit;