import React, {ChangeEvent, useState} from 'react';
import './StateButton.css';

export const StateButton = ({
                              initialCount = 0,
                              initialIterator = 1
                            }: { initialCount?: number, initialIterator?: number }) => {
  const [count, setCount] = useState(initialCount);
  const [iterator, setIterator] = useState(initialIterator);

  const increaseCount = () => {
    setCount(count + iterator);
  };

  const handleIteratorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIterator(Number(e.target.value));
  };

  return (
    <div className="StateButton">
      <p>Current count is: {count}</p>
      <button onClick={increaseCount}>
        Iterate
      </button>
      <label>
        Current iterator:
        <input type="number" value={iterator} onChange={handleIteratorChange}/>
      </label>
      <button onClick={() => {
        setCount(initialCount);
      }}>Reset counter
      </button>
      <button onClick={() => {
        setIterator(initialIterator);
      }}>Reset Iterator
      </button>
    </div>
  );
};
