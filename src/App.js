import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Products from './pages/Products';
import Coupons from './pages/Coupons';
import ClientForm from './pages/ClientForm';
import './App.css';

const App = () => {
  const [discount, setDiscount] = useState(null); 
  
  useEffect(() => {
    const storedDiscount = localStorage.getItem('discount');
    if (storedDiscount) {
      setDiscount(JSON.parse(storedDiscount));
    }
  }, []);

  return (
    <Router>
      <div className="app">
        <nav>
          <ul className="nav-list">
            <li>
              <Link to="/products" className="nav-button">Products</Link>
            </li>
            <li>
              <Link to="/coupons" className="nav-button">Coupons</Link>
            </li>
            <li>
              <Link to="/client-form" className="nav-button">Client Form</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/products"
            element={<Products discount={discount} />}
          />
          <Route
            path="/coupons"
            element={<Coupons setDiscount={setDiscount} />}
          />
          <Route path="/client-form" element={<ClientForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;





