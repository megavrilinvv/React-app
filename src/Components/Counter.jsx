import React, { useState } from "react";

const Counter = function () {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button className="but_dec" onClick={decrement}>
        Умн
      </button>
      <button className="but_inc" onClick={increment}>
        Увл
      </button>
    </>
  );
};

export default Counter;
