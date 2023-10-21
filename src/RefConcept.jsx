import { useRef, useEffect } from "react";

const RefConcept = () => {
  const h1Ref = useRef(null); // before mounting ref points to nothing
  const formRef = useRef(null);
  const handleClick = (e) => {
    console.log(e.target);

    // this is wrong we should not use e.target or ref.current to changes the contents of DOM
    // e.target.innerHTML = "Click Me";
    // e.target.style.color = "blue";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // this is correct since we don't change/alter the contents of DOM elements
    // e.target.reset();

    if (formRef.current) {
      formRef.current.reset();
    }
  };

  // Put some content into the h1 after mounted state
  useEffect(() => {
    console.log("H1 is mounted", h1Ref);
    if (h1Ref.current) {
      // check for the h1Ref having a DOM value
      // this is wrong we should not use e.target or ref.current to changes the contents of DOM
      // h1Ref.current.innerHTML = "Hello, welcome to B49WEENG";
    }
  }, []);

  return (
    <>
      <h1 ref={h1Ref}></h1>
      <button type="button" onClick={handleClick}>
        Btn
      </button>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input />
        <br />
        <input />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default RefConcept;
