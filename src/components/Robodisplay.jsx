import { useState, useEffect } from 'react';

function Robodisplay() {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then(response => response.json())
      .then(data => setRobots(data.bots))
      .catch(error => console.error('Error fetching robots:', error));
  }, []);

  return (
    <div className="robot-container">
      {robots.map(robot => (
        <img
          key={robot.id}
          src={robot.image}
          alt={robot.name}
          className="robot-image"
        />
      ))}
    </div>
  );
}

export default Robodisplay;
