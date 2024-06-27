import './style.css'
import { Link } from 'react-router-dom'

const Header = () => {
  let email=JSON.parse(localStorage.getItem('email'))
  return (
    <div className='head'>
      <ul>
        <Link to={`/home/${email}`}><li>Home</li></Link>
        <Link to={`/about/${email}`}><li>About</li></Link>
        <Link to={`/contact/${email}`}><li>Contact</li></Link>
      </ul>
      <p>{email}</p>
      <Link to='/'><button onClick={()=>window.localStorage.removeItem('isLoggedIn')}>Logout</button></Link>
    </div>
  )
}
export default Header