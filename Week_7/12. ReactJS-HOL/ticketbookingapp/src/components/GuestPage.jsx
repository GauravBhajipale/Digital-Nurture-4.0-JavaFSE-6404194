import React from 'react';

const GuestPage = () => {
  return (
    <div>
      <h2>Flight Details</h2>
      <ul>
        <li>IndiGo - Mumbai to Delhi - ₹4500</li>
        <li>Air India - Bangalore to Pune - ₹5600</li>
        <li>SpiceJet - Chennai to Goa - ₹3900</li>
      </ul>
      <p><strong>Note:</strong> You must be logged in to book tickets.</p>
    </div>
  );
};

export default GuestPage;
