"use client";
import { useState } from "react";

export const Counter = () => {
    console.log("Counter Component");
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
};


