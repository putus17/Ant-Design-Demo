import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../Layout/Home'
import About from '../../Layout/About'
import Products from '../../Layout/Products'
import Login from '../../layout/Login'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />

    </Routes>
  )
}

export default AppRoutes