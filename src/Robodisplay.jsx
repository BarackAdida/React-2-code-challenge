// Robodisplay.jsx

import { useState, useEffect } from 'react';

const Robodisplay = () => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Bot Profiles</h1>
      <div className="bot-container">
        {bots.map(bot => (
          <div key={bot.id} className="bot-card">
            <img src={bot.image} alt={bot.name} />
            <h2>{bot.name}</h2>
            <p>{bot.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Robodisplay;
