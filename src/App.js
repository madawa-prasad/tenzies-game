import React, { useState } from 'react';

import './app.css';
import Die from './components/Die';

function App() {
  //Generating random number array for 10 dice
  const allNewDice = () => {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({ value: Math.ceil(Math.random() * 6), isHeld: false });
    }
    return newDice;
  };

  const [dice, setDice] = useState(allNewDice());

  const rollDice = () => {
    setDice(allNewDice());
  };

  console.log(dice);
  return (
    <main>
      <div className="App">
        <div className="dice">
          {dice.map((die, index) => (
            <Die key={index} value={die.value} />
          ))}
        </div>
        <button className="roll-btn" onClick={rollDice}>
          Roll
        </button>
      </div>
    </main>
  );
}

export default App;
