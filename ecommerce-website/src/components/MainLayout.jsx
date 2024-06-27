import Footer from './Footer'
import Header from './Header'
import './style.css'

// eslint-disable-next-line react/prop-types
const MainLayout = ({children , isLogged, setIsLogged}) => {
  return (
    <div className='main'>
        <Header isLogged={isLogged} setIsLogged={setIsLogged}/>
        {/* <div className='product-section'>{children}</div> */}
        {children}
        <Footer />
    </div>
  )
}

export default MainLayout