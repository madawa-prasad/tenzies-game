import React from 'react';

import './die.css';

const Die = (props) => {
  return (
    <div className="die">
      <h2 className="die-value">{props.value}</h2>
    </div>
  );
};

export default Die;
