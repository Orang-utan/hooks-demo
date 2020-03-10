import React, { useEffect } from "react";

// passing down a function as a prop
export const Increment = ({ increment, count }) => {
  useEffect(() => {
    console.log("Count from button: " + count);
  });

  return (
    <div>
      <button onClick={increment}>Add 1</button>
    </div>
  );
};
