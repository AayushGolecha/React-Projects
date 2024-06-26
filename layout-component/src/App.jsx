import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Loginpage from './pages/loginpage'
import Homepage from './pages/homepage'
import Aboutpage from './pages/aboutpage'
import Contactpage from './pages/contactpage'
import { PrivateRoutes} from './components/auth'
import { useState } from 'react'

function App() {
  const [check, setCheck] = useState(false)
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Loginpage setCheck={setCheck}/>} />
        <Route element={<PrivateRoutes check={check} />}>
          <Route path='/home/:email' element={<Homepage />} />
          <Route path='/about/:email' element={<Aboutpage />} />
          <Route path='contact/:email' element={<Contactpage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
