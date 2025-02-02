import React, { useState } from 'react'

const Dice = () => {
    const [numsDice, setNumsDice] = useState(1);
    const [result, setResult] = useState([]);

    const handleRoll = () => {
        const diceCount =  numsDice < 1 ? 1 : numsDice > 12 ? 12 : numsDice;

        const newResult = [];
        for (let i = 0; i < diceCount; i++) {
            newResult.push(Math.floor(Math.random() * 6) + 1)
        }
        setResult(newResult);
        console.log(newResult, 'newResult');
    }
  return (
    <div>
        <div className='w-full flex items-center justify-center gap-5 mt-10 mx-auto'>
            <input type="number" min={1} max={12} placeholder='Enter the number from' className='w-1/3 border p-2 rounded-2xl' value={numsDice} onChange={(e) => setNumsDice(e.target.value)}/>
            <button onClick={handleRoll} className='bg-amber-200 p-2 rounded-2xl w-22'>Roll</button>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-2">
        {result.map((num, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded text-xl font-bold">
            🎲 {num}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dice