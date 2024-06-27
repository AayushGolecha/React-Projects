import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Loginpage from './pages/loginpage'
import Homepage from './pages/homepage'
import Aboutpage from './pages/aboutpage'
import Contactpage from './pages/contactpage'
import { PrivateRoutes, PrivateRoutes1 } from './components/auth'
import { useState } from 'react'
import PageNotFound from './pages/404page'

function App() {
  const [check, setCheck] = useState(false)
  console.log(check)
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes1 />}>
          <Route path='/' element={<Loginpage setCheck={setCheck}/>} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path='/home/:email' element={<Homepage />} />
          <Route path='/about/:email' element={<Aboutpage />} />
          <Route path='contact/:email' element={<Contactpage />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
        
      </Routes>
    </Router>
  )
}
export default App
