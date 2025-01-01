import React, { useState } from "react";

const teams = ["Mumbai Indians", "Delhi Capitals", "Chennai Super Kings", "Kolkata Knight Riders", "Royal Challengers Bangalore", "Sunrisers Hyderabad"];

const App = () => {
  const [winner, setWinner] = useState("");

  const selectWinner = () => {
    const randomIndex = Math.floor(Math.random() * teams.length);
    setWinner(teams[randomIndex]);
  };

  return (
    <div className="container">
      <h1>IPL Winner 2025</h1>
      <button onClick={selectWinner}>Select Winner</button>
      {winner && <p>Winner: {winner}</p>}
    </div>
  );
};

export default App;
