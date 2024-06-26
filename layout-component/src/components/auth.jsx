import { Navigate, Outlet } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export const PrivateRoutes = ({check}) => {
  let auth = {'token':check}
return (
    auth.token ? <Outlet/> : <Navigate to='/'/>
  )
}
