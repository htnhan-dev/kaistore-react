import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Catalog from '../pages/Catalog';
import Home from '../pages/Home';
import Product from '../pages/Product'
import Cart from '../pages/Cart'

const Layout = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/catalog/:slug' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
    </Routes>
  )
}

export default Layout