import React, { useState } from "react";
export default function Home() {
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex items-center justify-center gap-4 flex-col">
      <h1  className="font-extrabold text-2xl md:text-3xl mt-5">
        Increase and Decrease the Value
      </h1>
      <div className="flex items-center justify-center gap-11">
        <button
          onClick={handleDecrease}
          disabled={count <= 0}
          className={`
    p-3 
    w-12 h-12 
    flex items-center justify-center 
    text-2xl font-bold 
    rounded-full 
transition-colors duration-[500ms]    ${
            count <= 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-orange-600 hover:bg-orange-700 text-white cursor-pointer"
          }    
  `}
        >
          –
        </button>{" "}
        <h1 className="w-12 h-12 p-3 text-2xl flex justify-center items-center rounded-full bg-white text-black">
          {count}
        </h1>
        <button
          className="flex justify-center items-center cursor-pointer text-2xl p-3 font-bold rounded-full w-12 h-12 bg-orange-600 hover:bg-orange-700 transition-colors duration-[500ms]"
          onClick={handleIncrease}
        >
          +
        </button>
      </div>
    </div>
  );
}
