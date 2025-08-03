import React, { useState } from 'react';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginToggle = () => {
    setIsLoggedIn(prev => !prev);
  };

  let content;
  if (isLoggedIn) {
    content = <UserPage />;
  } else {
    content = <GuestPage />;
  }

  return (
    <div>
      <h1>✈️ Ticket Booking App</h1>
      <button onClick={handleLoginToggle}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
      <hr />
      {content}
    </div>
  );
}

export default App;
