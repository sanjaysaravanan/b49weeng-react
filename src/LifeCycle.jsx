import { useState, useEffect } from 'react';

const LifeCycle = () => {

  const [count, setCount] = useState(0);

  const [intervalId, setIntervalId] = useState(null);

  const intervalCallback = () => {
    setCount(count => count + 1);
    console.log(count);
  } 

  const increaseCount = () => {
    setCount(count => {
      console.log('setcount first',count);
      return count + 1;
    }); 
    console.log('Line 18');
    setCount(count => {
      console.log('setcount second',count);
      return count;
    });
    // asynchronous in nature
    // passing callback( access the previous value ) in setState func will try to treat it like synchronous value
    console.log('Value After Running setCount', count); // always setState is treated async
  }

  const decreaseCount = () => {
    setCount(count - 1);
  }

  const startInterval = () => {
    const id = setInterval(intervalCallback, 1000);
    setIntervalId(id);
  }

  const stopInterval = () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }

  useEffect(() => {
    startInterval();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {console.log('Value at re-rendering', count)}
      <h1>Simple Counter Application</h1>
      <h2>{count}</h2>
      {/* <button onClick={increaseCount} >Inc</button>
      <button onClick={decreaseCount} >Dec</button> */}
      <button onClick={startInterval} >Start</button>
      <button onClick={stopInterval} >Stop</button>
    </>
  );
}


export default LifeCycle;