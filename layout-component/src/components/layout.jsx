import Header from "./header"
import Footer from "./footer"
import Sidebar from "./sidebar"
import './style.css'

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="section1"><Sidebar /></div>
        <div className="section2">{children}</div>
      </div>
      <Footer />
    </div>
  )
}
export default Layout