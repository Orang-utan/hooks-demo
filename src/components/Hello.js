import React, { useEffect } from "react";

export const Hello = () => {
  useEffect(() => {
    console.log("render hello");

    // function gets called after unmount
    // clean up function
    return () => {
      console.log("unmount");
    };
  });

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};
