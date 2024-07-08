import React, { useState, useEffect } from 'react';

const Counter = ({ title, initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const [incount, setincount] = useState(0);

  useEffect(() => {
    let inc = 1; // Initialize inc outside setInterval to maintain its state

    const timer = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + 1;
        if (newCount === 10 * inc) {
          setincount((prevInCount) => prevInCount + 1);
          inc++; // Increment inc when count reaches multiples of 10
        }
        return newCount;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Determine button color based on count
  const buttonColor = count % 10 === 0 ? 'bg-blue-500' : 'bg-teal-950';

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg p-4">
      <h1 className="font-bold text-2xl mb-4">{title}</h1>
      <div className="flex gap-6 items-center">
        <button className="rounded-lg py-2 px-4 bg-yellow-500" onClick={decrementCount}>
          Decrement
        </button>
        <h1 className="font-bold text-purple-950">{count}</h1>
        <button className="rounded-lg py-2 px-4 bg-green-600" onClick={incrementCount}>
          Increment
        </button>
      </div>
      <button className={`rounded-lg px-4 py-2 mt-4 border-4 border-gray-950 ${buttonColor}`}>
        {incount}
      </button>
    </div>
  );
};

export default Counter;
