import { useNavigate } from "react-router-dom"

const Button=({name1})=>{
    const navigate=useNavigate()
    const handleNavigate=()=>{
        setTimeout(()=>{
            navigate('/')
        },2000)
    }
    return(
        <div>
            <button onClick={handleNavigate}>Home</button>
            <button onClick={()=>navigate(`/about/${name1}`)}>About</button>
            <button onClick={()=>navigate('/contact')}>Contact</button>
        </div>
    )
}
export default Button