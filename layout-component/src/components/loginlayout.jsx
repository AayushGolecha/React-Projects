import './style.css'

// eslint-disable-next-line react/prop-types
const Loginlayout = ({children}) => {
  return (
    <div className="form">
        <h1>Login Form</h1>
        <div>{children}</div>
    </div>
  )
}
export default Loginlayout