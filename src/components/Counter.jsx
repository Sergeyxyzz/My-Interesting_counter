import React, { useState } from 'react';

const Counter = ({ min, max }) => {
  const [counter, setCounter] = useState(0);

  const plusCounter = () => {
    if (counter < max) {
      setCounter(counter + 1)
    }
  }

  const minusCounter = () => {
    if (counter > min) {
      setCounter(counter - 1)
    }
  }

  const resetCounter = () => {
    setCounter(0)
  }
 
  const changeInp = (e) => {
    setCounter(e);
    if (isNaN(counter)) {
      setCounter('')
    }
  };
  return (
    <div>
      {counter}
      <button onClick={() => plusCounter()}>+</button>
      <input value={Number(counter)} onChange={(e) => changeInp(e.target.value)} />
      <button onClick={() => minusCounter()}>-</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
};

export default Counter;
