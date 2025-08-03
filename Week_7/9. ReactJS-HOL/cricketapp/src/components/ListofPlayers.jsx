import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 95 },
    { name: "Rohit", score: 88 },
    { name: "Dhoni", score: 99 },
    { name: "Kohli", score: 68 },
    { name: "Bumrah", score: 76 },
    { name: "Jadeja", score: 45 },
    { name: "Ashwin", score: 80 },
    { name: "Gill", score: 60 },
    { name: "Rahul", score: 72 },
    { name: "Iyer", score: 65 },
    { name: "Pant", score: 55 }
  ];

  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((p, i) => <li key={i}>{p.name} - {p.score}</li>)}
      </ul>

      <h2>Players With Score &lt; 70</h2>
      <ul>
        {below70.map((p, i) => <li key={i}>{p.name} - {p.score}</li>)}
      </ul>
    </div>
  );
};

export default ListofPlayers;
