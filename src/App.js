import React from 'react';
import Navbar from './components/navbar';
import Products from './components/products/products';
import Cart from './components/cart/cart';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Products />
        <Cart />
      </div>
    </>
  );
}

export default App;
