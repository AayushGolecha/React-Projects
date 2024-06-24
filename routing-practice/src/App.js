import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Button from './components/button';
import Form from './components/form';
import { useState } from 'react';

function App() {
  const [name1, setName1] = useState('')
  return (
    <Router>
      <div className="App">
        <Button name1={name1}/>
        <Form name1={name1} setName1={setName1}/>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to={`/about/${name1}`}>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path={`/about/:name1`} Component={About} />
          <Route path='/contact' Component={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
