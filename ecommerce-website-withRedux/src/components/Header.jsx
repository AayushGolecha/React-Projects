/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import './style.css'
import { Link } from 'react-router-dom'
import cart from '../assets/cart.svg'
import search from '../assets/search.svg'
import logo from '../assets/logo.png'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../redux/countSlice'
import { getData } from '../services/apiclient';
import { useEffect, useCallback } from 'react';

const Header = ({ isLogged, setIsLogged, name, list, setList, searchVal, setSearchVal }) => {
    const count = useSelector((state) => state.count.value)
    const dispatch = useDispatch()
    let response
    const fetchData = useCallback(async () => {
        response = await getData()
        setList(response)
    }, [searchVal])
    useEffect(() => {
        fetchData()
    }, [fetchData])
    const handleDelete = () => {
        localStorage.removeItem('carts')
        setIsLogged(false);
    }
    const handleSearch = () => {
        if (searchVal === "") { setList(response); return; }
        const filterBySearch = list.filter((item) => {
            if (item.name.toLowerCase().includes(searchVal.toLowerCase())) { return item; }
        })
        setList(filterBySearch);
    }
    return (
        <div className='head'>
            <ul>
                <Link to={isLogged ? `/${name}` : `/`}><img src={logo} alt='logo' /></Link>
                <Link to={isLogged ? `/${name}` : `/`}><li>Home</li></Link>
                <Link to={isLogged ? `/about/${name}` : `/about`}><li>About</li></Link>
                <Link to={isLogged ? `/contact/${name}` : `/contact`}><li>Contact</li></Link>
            </ul>
            <div className='search'>
                <input type='search' placeholder='Search Products' onChange={(e) => setSearchVal(e.target.value)}/>
                <img src={search} alt='search' onClick={handleSearch}/>
            </div>
            <div className='box'>
                <Link to={isLogged ? `/cart/${name}` : `/cart`}>
                    <div className='cart'>
                        <img src={cart} alt='cart' />
                        {count >= 1 && isLogged ? <p>{count}</p> : ''}
                    </div>
                </Link>
                {isLogged ? <p>{name}</p> : ''}
                <Link to={isLogged ? '/' : '/login'}><button onClick={() => { handleDelete(); dispatch(logout()) }}>{isLogged ? 'Logout' : 'Login'}</button></Link>
            </div>
        </div>
    )
}
export default Header