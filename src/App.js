import React, { useState } from 'react';

import './app.css';
import Die from './components/Die';

function App() {
  //Generating random number array for 10 dice
  const allNewDice = () => {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  };

  const [dice, setDice] = useState(allNewDice());

  console.log(dice);
  return (
    <main>
      <div className="App">
        <div className="dice">
          {dice.map((die, index) => (
            <Die key={index} value={die} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
