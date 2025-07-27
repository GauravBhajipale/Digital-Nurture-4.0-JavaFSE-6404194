import React from 'react';
import './App.css';
import { CalculateScore } from './Components/CalculateScore.jsx';

function App() {
  return (
    <div className="App">
      <h1>Score Calculator App</h1>
      <CalculateScore Name="Gaurav" School="YCCE" total={90} goal={100} />
    </div>
  );
}

export default App;
