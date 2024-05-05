import React from 'react'

function Robodisplay({ robots }) {
  return (
    <div id='div1'>
        {
            robots.map(robot => (
                <div key={robot.id}>
                    <img src={robot.image} alt={robot.name} />
                    <p>{robot.name}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Robodisplay