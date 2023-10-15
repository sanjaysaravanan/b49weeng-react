import { useState } from "react";

const Child = ({ value }) => {
  const [count, setCount] = useState(0);

  const incCount = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      {console.log("rendring child")}
      <h1>Child</h1>
      {/* <h3>Count: {value}</h3> */}
      <h3>Count: {count}</h3>
      <button onClick={incCount}>+</button>
    </>
  );
};

const Parent = ({ value }) => {
  const [count, setCount] = useState(0);

  const incCount = () => {
    setCount((count) => count + 1);
  };
  return (
    <>
      {console.log("rendering parent")}
      <h1>Parent</h1>
      {/* <h3>Count: {value}</h3> */}
      {/* <h3>Count: {count}</h3> */}
      {/* <button onClick={incCount}>+</button> */}
      <Child value={value} />
    </>
  );
};

const GrandParent = () => {
  const [count, setCount] = useState(0);

  const incCount = () => {
    setCount((count) => count + 1);
  };
  return (
    <>
      {console.log("rendering grandparent")}
      <h1>Grand Parent</h1>
      {/* <h3>Count: {count}</h3> */}
      {/* <button onClick={incCount}>+</button> */}
      <Parent value={count} />
    </>
  );
};

export default GrandParent;
