import React, { useEffect, useState } from 'react';
import './App.css';
import ProductList from './components/ProductsList';
import ProductDetails from './components/ProductsDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { getAll } from './service/getProducts';


export interface Product {
  id: string,
  title: string,
  thumbnail: string,
  price: number
}

interface AppState {
  product: Product[]
}

function App() {
  const [products, setProducts] = useState<AppState["product"]>([])

  useEffect(() => {
    getAll().then((res) => {
      setProducts(res)
    })
  }, [])


  return (
    <BrowserRouter>
      <div className="App">
        <h1>Listado de productos</h1>
        <Routes>
          <Route path='/' element={<ProductList products={products} />}></Route>
          <Route path='/detalle/:productId' element={<ProductDetails products={products} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
