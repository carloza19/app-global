import React, { useEffect, useState } from 'react';
import './App.css';
import ProductList from './components/ProductsList';
import ProductDetails from './components/ProductsDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { getAll } from './service/getProducts';


export interface Product {
  _id: string,
  title: string,
  img: {
    src: string,
    alt: string
  },
  price: number,
  createdAt: string,
  updatedAt: string
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
        <h1>Global Ecommerce</h1>
        <Routes>
          <Route path='/products' element={<ProductList products={products} />}></Route>
          <Route path='/detalle/:productId' element={<ProductDetails />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
