import { useContext, useState, createContext } from "react";
const AuthContext = createContext()

const Auth = () => {
    const [isLogged, setIsLogged] = useState(null)
    return (
        <AuthContext.Provider value={{ isLogged, setIsLogged }}>
            <Box />
        </AuthContext.Provider>
    )
}

export default Auth

const Box = () => {
    const { isLogged, setIsLogged } = useContext(AuthContext)
    if (isLogged !== null) {
        return <div>
            <p>You are logged-in as {isLogged.name}</p>
            <Button onClick={() => { setIsLogged(null) }}>Logout</Button>
        </div>
    }
    return (
        <>
            <h1>Welcome</h1>
            <Button onClick={() => { setIsLogged({ name: 'Ram' }) }}>Log in as Rahul</Button>
        </>
    )
}

const Button = ({ children, onClick }) => {

    return (
        <button onClick={onClick}>{children}</button>
    )
}