import { useEffect, useState } from "react";


const LifeCycleTwo = () => {

  const [image, setImage] = useState('');

  const [loadFox, setLoadFox] = useState(true);

  const loadImage = async () => {
    const response = await fetch('https://randomfox.ca/floof/');
    const data = await response.json();
    setImage(data.image);
  }

  const loadRandom = () => {
    setLoadFox(true);
  }

  // mounted phase
  useEffect(() => {
    if (loadFox) {
      console.log('line 23');
      loadImage();
      setLoadFox(false);
    }

    // this is very dangerous because we are sort of doing recursive loading because we change the dependent value inside updation
    // setLoadFox(!loadFox);
      
    // Updating Phase, we re-render the image using a state variable loadFox as dependency
  }, [loadFox]);

  return (
    <>
      {image && <img src={image} alt="fox" />}
      <button onClick={loadRandom}>Next</button>
    </>
  );
}


export default LifeCycleTwo;