import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Products from '../pages/products/Products'

const PageRoutes = () => {
  return (
    <>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='product' element={<Products/>} />
        </Routes>
    </>
  )
}

export default PageRoutes