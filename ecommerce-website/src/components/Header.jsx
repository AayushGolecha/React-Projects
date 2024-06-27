import './style.css'
import { Link } from 'react-router-dom'
import cart from '../assets/cart.svg'
import logo from '../assets/logo.png'

// eslint-disable-next-line react/prop-types
const Header = ({isLogged, setIsLogged}) => {
    return (
        <div className='head'>
            <ul>
                <Link to={`/`}><img src={logo} alt='logo'/></Link>
                <Link to={`/`}><li>Home</li></Link>
                <Link to={`/about`}><li>About</li></Link>
                <Link to={`/contact`}><li>Contact</li></Link>
            </ul>
            <input type='search' placeholder='Search Products' />
            <div className='cart'>
                <img src={cart} alt='cart' />
                {isLogged ? <p>User</p>:''}
                <Link to={isLogged ? '/':'/login'}><button onClick={()=>setIsLogged(false)}>{isLogged ? 'Logout':'Login'}</button></Link>
            </div>
        </div>
    )
}
export default Header