import React, { useState } from "react";

const DiceRoller = () => {
  const [numDice, setNumDice] = useState(1);
  const [results, setResults] = useState([]);

  const handleRoll = () => {
    const diceCount = numDice < 1 ? 1 : numDice > 12 ? 12 : numDice;
    const newResults = [];

    for (let i = 0; i < diceCount; i++) {
      newResults.push(Math.floor(Math.random() * 6) + 1);
    }

    setResults(newResults);
  };

  return (
    <div className="w-80 mx-auto mt-6 font-sans text-center">
      <h1 className="text-2xl font-bold mb-4">🎲 Dice Roller</h1>

      <input
        type="number"
        value={numDice}
        onChange={(e) => setNumDice(parseInt(e.target.value) || 1)}
        min="1"
        max="12"
        className="border p-2 w-full mb-4 text-center"
      />

      <button
        onClick={handleRoll}
        className="bg-blue-500 text-white py-2 px-4 rounded w-full"
      >
        Roll
      </button>

      <div className="mt-6 grid grid-cols-3 gap-2">
        {results.map((num, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded text-xl font-bold">
            🎲 {num}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiceRoller;
