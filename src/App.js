import React from 'react';
import logo from './logo.svg';
import './App.css';
import DiscountPage from './features/products/components/DiscountPage';
import Footer from './app/components/Footer';
function App() {
  return (
    <div className="App">
      <h1>header</h1>
      <DiscountPage/>
      <Footer />
    </div>
  );
}

export default App;
