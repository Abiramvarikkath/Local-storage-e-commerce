import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import Fetch from './Component/Fetch'
import ProductDetails from './Component/ProductDetails'
import Cart from './Component/Cart'

function App() {
  const [search, setSearch] = useState("")  

  return (
    <>
          <BrowserRouter>
       <Nav/>
        <Routes>
          <Route path='/' element={<Fetch search={search} />} />
          <Route path='/details/:id' element={<ProductDetails/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App