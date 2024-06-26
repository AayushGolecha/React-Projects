import Layout from "../components/layout"
import './style.css'
import {useParams} from 'react-router-dom'

const Contactpage = () => {
  const {email}=useParams()
  return (
    <Layout>
      <div className="homepage">
        <h1>Contact Details of {email}!</h1>
        <p>This is a Contact page</p>
      </div>
    </Layout>
  )
}
export default Contactpage