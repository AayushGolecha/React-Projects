import { GetData } from './services/fetch';
import { useState } from 'react'
import './App.css';
import { ProductContext } from './components/context';
import ProductData from './components/ProductData';

function App() {
  const [products, setProducts] = useState([])
  const handleData=async ()=>{
    const result=await GetData()
    setProducts(result);
  }
  return (
    <ProductContext.Provider value={products}>
      <div className="App">
      <h1>Products Data</h1>
        <button onClick={handleData}>Fetch Data</button>
        <ProductData />
      </div>
    </ProductContext.Provider>
  );
}

export default App;
