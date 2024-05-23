import React from "react";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  // let num = 0;
  console.log(count);

  return (
    <div className="counter">
      <span className="number">{count}</span>
      <button
        className="button"
        onClick={() => {
          setCount(count + 1);
          // num++;
          // console.log(num);
        }}
      >
        Add +
      </button>
    </div>
  );
};
