import React from 'react';

const offices = [
  {
    name: "Tech Park",
    rent: 50000,
    address: "123 Startup Street, Bangalore",
    image: "https://via.placeholder.com/300x150?text=Tech+Park"
  },
  {
    name: "Innovation Hub",
    rent: 65000,
    address: "456 Innovation Ave, Hyderabad",
    image: "https://via.placeholder.com/300x150?text=Innovation+Hub"
  },
  {
    name: "Corporate Tower",
    rent: 55000,
    address: "789 Business Blvd, Pune",
    image: "https://via.placeholder.com/300x150?text=Corporate+Tower"
  }
];

const OfficeList = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Office Space Rental App</h1>

      {offices.map((office, index) => (
        <div
          key={index}
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '15px',
            margin: '20px auto',
            width: '80%',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        >
          <img
            src={office.image}
            alt={office.name}
            style={{ width: '100%', height: '150px', objectFit: 'cover' }}
          />
          <h2>{office.name}</h2>
          <p><strong>Address:</strong> {office.address}</p>
          <p>
            <strong>Rent:</strong>{' '}
            <span style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
              ₹{office.rent}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default OfficeList;
