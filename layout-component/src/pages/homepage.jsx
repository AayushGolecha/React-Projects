import Layout from "../components/layout"
import './style.css'
import {useParams} from 'react-router-dom'

const Homepage = () => {
  const {email}=useParams()
  return (
    <Layout>
      <div className="homepage">
        <h1>Welcome {email}!</h1>
        <p>This is a Home page</p>
      </div>
    </Layout>
  )
}
export default Homepage