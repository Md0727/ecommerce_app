import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import CartList from './pages/CartList';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart-list' element={<CartList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
