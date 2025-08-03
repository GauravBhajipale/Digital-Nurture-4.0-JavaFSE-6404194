import React from 'react';

const IndianPlayers = () => {
  const oddPlayers = ["Virat", "Dhoni", "Bumrah", "Ashwin", "Iyer"];
  const evenPlayers = ["Rohit", "Kohli", "Jadeja", "Gill", "Rahul", "Pant"];

  // Destructuring
  const [odd1, odd2, ...oddRest] = oddPlayers;
  const [even1, even2, ...evenRest] = evenPlayers;

  // Merging arrays
  const T20 = ["Raina", "Hardik"];
  const Ranji = ["Pujara", "Rahane"];
  const merged = [...T20, ...Ranji];

  return (
    <div>
      <h2>Odd Players</h2>
      {[odd1, odd2, ...oddRest].map((p, i) => <p key={i}>{p}</p>)}

      <h2>Even Players</h2>
      {[even1, even2, ...evenRest].map((p, i) => <p key={i}>{p}</p>)}

      <h2>Merged T20 & Ranji Players</h2>
      {merged.map((p, i) => <p key={i}>{p}</p>)}
    </div>
  );
};

export default IndianPlayers;
