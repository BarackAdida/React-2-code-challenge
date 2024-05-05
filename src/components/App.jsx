// src/components/App.jsx
import React, { useState, useEffect } from 'react';
import Robodisplay from './Robodisplay';

function App() {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    fetch('/db.json') // Assuming db.json is in the public folder.
      .then(response => response.json())
      .then(data => setRobots(data.bots))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Robodisplay robots={robots} />
    </div>
  );
}

export default App;
