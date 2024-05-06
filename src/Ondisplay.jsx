import { useState } from 'react';

function Ondisplay(robots) {
  const [selectedRobot, setSelectedRobot] = useState(null);

  const handleClick = (robot) => {
    if (selectedRobot === robot) {
      setSelectedRobot(null);
    } else {
      setSelectedRobot(robot);
    }
  };

  return (
    <div className="robot-display">
      {selectedRobot && (
        <img
          src={selectedRobot.image}
          alt={selectedRobot.name}
          className="selected-robot"
          onClick={() => setSelectedRobot(null)}
        />
      )}

      <div className="other-robots">
        {robots.map(robot => (
          <img
            key={robot.id}
            src={robot.image}
            alt={robot.name}
            className="other-robot"
            onClick={() => handleClick(robot)}
          />
        ))}
      </div>
    </div>
  );
}

export default Ondisplay;

