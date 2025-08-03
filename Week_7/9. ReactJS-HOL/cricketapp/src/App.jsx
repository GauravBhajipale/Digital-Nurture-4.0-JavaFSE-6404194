import React from 'react';
import ListofPlayers from "./components/ListofPlayers.jsx";
import IndianPlayers from "./components/IndianPlayers.jsx";


function App() {
  const flag = true; // Change to false to show IndianPlayers

  return (
    <div>
      <h1>🏏 Cricket App</h1>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
