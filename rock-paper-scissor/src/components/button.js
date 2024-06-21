const Button=({value, input, onclick})=>{
    const handleInput=()=>{
        input(value)
    }
    return(
        <button onClick={()=>{handleInput();onclick()}}>{value}</button>
    )
}
export default Button