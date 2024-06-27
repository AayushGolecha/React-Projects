import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoutes = () => {
  let isLogged = localStorage.getItem('isLoggedIn')
return (
    isLogged ? <Outlet/> : <Navigate to='/'/>
  )
}
export const PrivateRoutes1 = () => {
  let isLogged = localStorage.getItem('isLoggedIn')
  let email=JSON.parse(localStorage.getItem('email'))
return (
    isLogged ? <Navigate to={`/home/${email}`}/> : <Outlet/>
  )
}

