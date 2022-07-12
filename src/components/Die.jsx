import React from 'react';

import './die.css';

const Die = (props) => {
  const heldStyles = { backgroundColor: props.isHeld ? '#59E391' : 'white' };

  return (
    <div onClick={props.holdDice} className="die" style={heldStyles}>
      <h2 className="die-value">{props.value}</h2>
    </div>
  );
};

export default Die;
