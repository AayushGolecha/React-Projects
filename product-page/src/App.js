import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import ProductPage from './components/productpage';
import CreateProducts from './components/createproduct';
import UpdateProducts from './components/updateproduct';
import { useState } from 'react'

function App() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/add" element={<CreateProducts name={name} price={price} imageUrl={imageUrl} setName={setName} setPrice={setPrice} setImageUrl={setImageUrl} />} />
        <Route path="/" element={<ProductPage setName={setName} setPrice={setPrice} setImageUrl={setImageUrl} />} />
        <Route path="/update" element={<UpdateProducts name={name} price={price} imageUrl={imageUrl} setName={setName} setPrice={setPrice} setImageUrl={setImageUrl} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
