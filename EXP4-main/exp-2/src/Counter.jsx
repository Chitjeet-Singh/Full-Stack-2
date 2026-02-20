import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <h1 className="counter__title">Counter</h1>
      <p className="counter__value">{count}</p>
      <div className="counter__actions">
        <button className="btn btn--inc" onClick={() => dispatch(increment())}>+</button>
        <button className="btn btn--dec" onClick={() => dispatch(decrement())}>-</button>
        <button className="btn btn--ghost" onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;