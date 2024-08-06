
import React, { useState } from 'react';


const Counter: React.FC = () => {
  
  const [count, setCount] = useState<number>(0);

  
  const increment = () => {
    setCount(count + 1);
  }
  
  const decrement = () => {
    setCount(count - 1);
}
  
  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <h1 className="text-3xl font-bold mb-4">Count Increment Function</h1>
      <h1 className="text-3xl font-bold mb-4">Counter: {count}</h1>
      <div className="flex space-x-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={decrement}
        >
          Decrement
        </button>
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
