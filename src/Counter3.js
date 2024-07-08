import React, { useEffect, useState } from 'react';

const Prop = () => {
  const [count, setCount] = useState(1);
  const [incount, setincount] = useState(0);

  useEffect(() => {
    let inc = 1; // Initialize inc outside setInterval to maintain its state

    const timer = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + 1;
        if (newCount === 30 * inc) {
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
  const buttonColor = count % 30 === 0 ? 'bg-blue-500' : 'bg-fuchsia-950';

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4 sm:p-10">
      <h1 className="font-bold text-3xl p-4 sm:p-10 text-center">Counter 3</h1>
      <div className="flex flex-col sm:flex-row gap-6 items-center">
        <button className="rounded-lg py-2 px-4 sm:py-5 sm:px-5 bg-yellow-500" onClick={decrementCount}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z" clipRule="evenodd" />
          </svg>
        </button>
        <h1 className="font-bold text-2xl sm:text-3xl text-purple-950">{count}</h1>
        <button className="rounded-lg py-2 px-4 sm:py-5 sm:px-5 bg-green-600" onClick={incrementCount}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <button className={`rounded-lg px-6 py-6 sm:px-11 sm:py-11 m-3 border-4 border-gray-950 ${buttonColor}`}>
        {incount}
      </button>
    </div>
  );
};

export default Prop;
