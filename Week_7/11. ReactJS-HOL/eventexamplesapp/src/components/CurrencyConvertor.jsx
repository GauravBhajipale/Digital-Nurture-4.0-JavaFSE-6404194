import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = () => {
    const value = parseFloat(rupees);
    if (!isNaN(value)) {
      const result = value / 90; // Assume 1 EUR = ₹90
      setEuro(result.toFixed(2));
    } else {
      setEuro("Invalid input");
    }
  };

  return (
    <div>
      <h2>Currency Convertor</h2>
      <input
        type="text"
        placeholder="Enter amount in INR"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
      />
      <button onClick={handleSubmit}>Convert</button>
      <p>In Euro: €{euro}</p>
    </div>
  );
};

export default CurrencyConvertor;
