import React from 'react';

const UserPage = () => {
  return (
    <div>
      <h2>Book Your Flight</h2>
      <form>
        <label>From: <input type="text" /></label><br /><br />
        <label>To: <input type="text" /></label><br /><br />
        <label>Date: <input type="date" /></label><br /><br />
        <button type="submit">Book Ticket</button>
      </form>
    </div>
  );
};

export default UserPage;
