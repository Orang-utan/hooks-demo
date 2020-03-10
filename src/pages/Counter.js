import React, { useState } from "react";
import { Increment } from "../components/Increment";

// this demonstrates inverse data flow
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter</h1>

      <div>count: {count}</div>
      <Increment increment={() => setCount(count + 1)} count={count} />
    </div>
  );
};

export default Counter;
