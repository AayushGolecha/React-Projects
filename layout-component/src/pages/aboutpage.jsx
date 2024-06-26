import Layout from "../components/layout"
import './style.css'
import {useParams} from 'react-router-dom'

const Aboutpage = () => {
  const {email}=useParams()
  const password=JSON.parse(localStorage.getItem('password'))
  return (
    <Layout>
      <div className="homepage">
        <h1>About {email}!</h1>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
      </div>
    </Layout>
  )
}
export default Aboutpage