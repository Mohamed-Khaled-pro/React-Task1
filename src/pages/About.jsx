import React from "react";
import { useState } from "react";
export default function About() {
  const [number, setNumber] = useState(0);
  return (
<>
<div className="flex flex-col justify-center items-center gap-5">
  <h1 className="font-extrabold text-2xl md:text-3xl mt-5">
 Generate and display a random number
      </h1> 
      <div className="flex justify-center items-center gap-20">
      <button
        className="flex  justify-center items-center cursor-pointer text-2xl p-3 font-bold rounded-full bg-orange-600 w-36 h-12 hover:bg-orange-700 transition-colors duration-[500ms]"
        onClick={() => setNumber((Math.random() * 100).toFixed(0))}
      >
        Click me
      </button>
      <h1 className="w-12 h-12 p-3 text-2xl flex justify-center items-center rounded-full bg-white text-black">{number}</h1>
    </div>
</div>
  
</>
   
  );
}
