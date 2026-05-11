import React, { useState } from "react";

const Counter = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);
  return (
    <div data-testid="counter">
      <p data-testid="count-display">{count}</p>
      <button data-testid="btn-increment" onClick={() => setCount(c => c + 1)}>+</button>
      <button data-testid="btn-decrement" onClick={() => setCount(c => c - 1)}>-</button>
      <button data-testid="btn-reset" onClick={() => setCount(initialValue)}>Reset</button>
    </div>
  );
};

export default Counter;
