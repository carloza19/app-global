import React, { useEffect, useState } from 'react';
import './App.css';
import ProductList from './components/ProductsList';
import ProductDetails from './components/ProductsDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const INITIALSTATE = [{
  id: "MLA899081746",
  title: "Apple AirPods (segunda Generacion) Con Estuche De Carga - Blanco - Distribuidor Autorizado",
  thumbnail: "http://http2.mlstatic.com/D_923638-MLA54361048207_032023-I.jpg",
  price: 224999.55,
},
{
  id: "MLA1148411397",
  title: "Funda Compatible iPod Touch Gen 5 - 6 - 7 - Doble Protección",
  thumbnail: "http://http2.mlstatic.com/D_677045-MLA50877229591_072022-I.jpg",
  price: 6600,
}]


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
    setProducts(INITIALSTATE)
  }, [])


  return (
    <BrowserRouter>
      <div className="App">
        <h1>Listado de productos</h1>
        <Routes>
          <Route path='/' element={<ProductList products={products} />}></Route>
          <Route path='/detalle/:productId' element={<ProductDetails products={products}/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
