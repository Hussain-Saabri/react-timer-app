import React from 'react';

import Counter1 from "./Counter1.js"
import Counter2 from "./Counter2.js"
import Counter3 from "./Counter3.js"
function App() {
  return (
    <>
      
      <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-10">
        <h1 className="font-bold text-4xl mb-8 font-black">React Counter Timer App</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg">
            <Counter1 />
          </div>
          <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg">
            <Counter2 />
          </div>
          <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg">
            <Counter3 />
          </div>
        </div>
      </div>
      
      
    </>
  );
}

export default App;
