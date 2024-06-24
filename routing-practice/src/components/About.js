import { useParams } from "react-router-dom"

const About=()=>{
    const {name1}=useParams()
    return(
        <div>
            <h1>About {name1}</h1>
            <p>This is About page.</p>
        </div>
    )
}
export default About