import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

import './app.css';
import Die from './components/Die';

function App() {
  const [tenzies, setTenzies] = useState(false);

  //Generating random number array for 10 dice
  const allNewDice = () => {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
      });
    }
    return newDice;
  };
  const [dice, setDice] = useState(allNewDice());

  //Changing isHeld property
  const holdDice = (i) => {
    setDice((oldDice) =>
      oldDice.map((die, index) => {
        return index === i ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  };

  //useEffect to check the game ending conditions
  useEffect(() => {
    //Checking whether the all isHeld= true && all values are equal
    const endCondition = dice.every(
      (die) => die.isHeld && die.value === dice[0].value
    );
    endCondition ? setTenzies(true) : setTenzies(false);
  }, [dice]);

  //Change unhold dice on rolling
  const rollDice = () => {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld
          ? die
          : {
              value: Math.ceil(Math.random() * 6),
              isHeld: false,
            };
      })
    );
  };

  return (
    <main>
      {tenzies && <Confetti />}
      <div className="App">
        <h1 className="title">Tenzies</h1>
        <p className="description">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="dice">
          {dice.map((die, index) => (
            <Die
              key={index}
              value={die.value}
              isHeld={die.isHeld}
              holdDice={() => holdDice(index)}
            />
          ))}
        </div>
        <button className="roll-btn" onClick={rollDice}>
          {tenzies ? 'New Game' : 'Roll'}
        </button>
      </div>
    </main>
  );
}
//Useless comment, added to test a doubt.
export default App;
