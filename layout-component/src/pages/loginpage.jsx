import { useState } from "react"
import Loginlayout from "../components/loginlayout"
import './style.css'
import { useNavigate } from 'react-router-dom'
import Button from "../components/button"

// eslint-disable-next-line react/prop-types
const Loginpage = ({setCheck}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleSubmit = () => {
    localStorage.setItem('email',JSON.stringify(email))
    localStorage.setItem('password',JSON.stringify(password))
    setCheck(true)
    navigate(`/home/${email}`)
  }
  return (
    <Loginlayout>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" type="password" required />
        <div className="btn">
          <Button name='Login' type='submit' />
          <Button name='Reset' type='reset' />
        </div>
      </form>
    </Loginlayout>
  )
}
export default Loginpage