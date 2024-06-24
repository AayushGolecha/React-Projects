import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Address from './components/Address'
import { useState } from 'react'

function App() {
  const [data, setData] = useState('')
  return (
    <div className='pro'>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to='/about'>About</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About data={data} setData={setData} />}>
            <Route path='address/:data' element={<Address />} />
            <Route path='contact/:data' element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
