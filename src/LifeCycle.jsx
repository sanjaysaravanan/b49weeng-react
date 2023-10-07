import { useEffect, useState } from "react";


const LifeCycle = () => {

  const [count, setCount] = useState(0);
  const [image, setImage] = useState('');

  // Mounting --> use useEffect syntax to access the life cycle phase of a component

  // Task use the https://randomfox.ca/floof/ and show different Fox for every 10 secs

  const intervalCallback = async () => {
    const response = await fetch('https://randomfox.ca/floof/');
    const data = await response.json();
    setImage(data.image);
  }

  const intervalCount = () => {
    setCount(count + 1);
  }


  // Mounted Phase
  useEffect(() => {
    // Statements to be executed right after RealDOM Component Mounting
    // setInterval(intervalCallback, 5000);
    setInterval(intervalCount, 1000);
  }, []);

  return (
    <>
    {console.log('rendering, so it means component mounted')}
    <h1>Demo For Life Cycle</h1>
    {/* <img alt="Fox" src={image} /> */}
    <h2>{count}</h2>
    </>
  );
}


export default LifeCycle;