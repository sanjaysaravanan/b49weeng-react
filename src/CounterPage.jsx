// Simple Counter Application to Understand State in React
import { useState } from 'react'; // state hooks allows the re-rendering

const CounterPage = () => {

  // let count = 99;

  const [count, setCount] = useState(99);

  const [like, setLike] = useState(false);

  const handleInc = () => {
    // count += 1; // count = count + 1;
    // console.log('Increased', count);
    setCount(count + 1); // setCount(100);
  }

  const handleDec = () => {
    // count -= 1; // count = count - 1;
    // console.log('Decresed', count);
    setCount(count - 1); //
  }

  const handleLike = () => {
    if (like) {
      setLike(false)
    } else {
      setLike(true);
    }
  }

  return (
    <div>
      {/* <h1></h1> */}
      {console.log('Rendering...')}
      <h1>{count}</h1>
      <button onClick={handleInc} >+ Inc</button>{' '}
      <button onClick={handleDec}>- Dec</button>

      <br />
      <button onClick={handleLike} >
        {/* {like ? <i className="fa-solid fa-thumbs-up"></i> :
          <i className="fa-regular fa-thumbs-up"></i>} */}

        <i className={`fa-${like ? 'solid' : 'regular'} fa-thumbs-up`}></i>
      </button>
    </div>
  )
}


export default CounterPage;