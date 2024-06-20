import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Read from './components/read';
import Create from './components/create';
import Update from './components/update';
import { useState } from 'react'

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/create" element={<Create firstName={firstName} lastName={lastName} setFirstName={setFirstName} setLastName={setLastName} />} />
          <Route path="/" element={<Read setFirstName={setFirstName} setLastName={setLastName}/>} />
          <Route path="/update" element={<Update firstName={firstName} lastName={lastName} setFirstName={setFirstName} setLastName={setLastName} />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
