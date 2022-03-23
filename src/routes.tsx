import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProductList from './pages/ProductListUserCase';
import ProductDetails from './pages/ProductDetailsUserCase';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}