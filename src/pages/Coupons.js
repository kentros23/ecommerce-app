import React, { useEffect, useState } from 'react';

const Coupons = ({ setDiscount }) => {
  const [appliedDiscount, setAppliedDiscount] = useState(null);

  useEffect(() => {
    const storedDiscount = localStorage.getItem('discount');
    if (storedDiscount) {
      setAppliedDiscount(JSON.parse(storedDiscount));
      setDiscount(JSON.parse(storedDiscount));
    }
  }, [setDiscount]);

  useEffect(() => {
    if (appliedDiscount !== null) {
      localStorage.setItem('discount', JSON.stringify(appliedDiscount));
    }
  }, [appliedDiscount]);

  const applyDiscount = (percentage) => {
    setAppliedDiscount(percentage);
    setDiscount(percentage);
  };

  return (
    <div>
      <h2>Coupons</h2>
      <p>Select a discount to apply to all products:</p>
      <div className="coupon-buttons">
        <button onClick={() => applyDiscount(0.1)}>10% Discount</button>
        <button onClick={() => applyDiscount(0.2)}>20% Discount</button>
        <button onClick={() => applyDiscount(0.3)}>30% Discount</button>
        <button onClick={() => applyDiscount(0.5)}>50% Discount</button>
        <button onClick={() => applyDiscount(0)}>Remove Discount (0%)</button> 
      </div>
    </div>
  );
};

export default Coupons;


