import React from 'react';
import useCounter from '../custome-hooks/useCounter';

const UserProfile = (props) => {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <>
      <div className="border border-red-500 p-4 m-4 w-48">
        <h3 className="text-lg font-semibold">Name: {props.name}</h3>
        <h3 className="text-lg font-semibold">Age: {props.age}</h3>
        <h3 className="text-lg font-semibold">Rank: {props.rank}</h3>
      </div>
      <div className="text-center mt-6">
        <h1 className="text-2xl font-bold mb-4">Custom Hooks Usage</h1>
        <button 
          onClick={increment} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          +
        </button>
        <p className="text-lg mt-2 mb-2">Count Value: {count}</p>
        <button 
          onClick={decrement} 
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          -
        </button>
        <button 
          onClick={reset} 
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-2"
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default UserProfile;
