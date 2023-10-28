import { useEffect, useReducer, useState } from "react";

const moves = ["top", "left", "right", "bottom"];

const initialState = {
  left: 300,
  top: 300,
};

// const reducer = (position, { direction }) => {
//   if (direction === "left" && position.left !== 0) {
// return {
//   ...position,
//   left: position.left - 300,
// };
//   }
//   if (direction === "right" && position.left < 600) {
//     return {
//       ...position,
//       left: position.left + 300,
//     };
//   }
//   if (direction === "top" && position.top !== 0) {
//     return {
//       ...position,
//       top: position.top - 300,
//     };
//   }
//   if (direction === "bottom" && position.top < 600) {
//     return {
//       ...position,
//       top: position.top + 300,
//     };
//   }
//   return { ...position };
// };

const reducer = (position, { direction }) => {
  switch (direction) {
    case "bottom":
      return {
        ...position,
        top: position.top + 300,
      };
    case "left":
      return {
        ...position,
        left: position.left - 300,
      };
    case "right":
      return {
        ...position,
        left: position.left + 300,
      };
    case "top":
      return {
        ...position,
        top: position.top - 300,
      };
    default:
      return { ...position };
  }
};

const Concept = () => {
  // const [position, setPosition] = useState({
  //   top: 300,
  //   left: 300,
  // });

  // useReducer
  const [position, dispatch] = useReducer(reducer, initialState);

  // direction --> left or right or top or bottom
  const handleMove = (direction) => {
    // if (direction === "left" && position.left !== 0) {
    //   setPosition((position) => ({
    //     ...position,
    //     left: position.left - 300,
    //   }));
    // }
    // if (direction === "right" && position.left < 600) {
    //   setPosition((position) => ({
    //     ...position,
    //     left: position.left + 300,
    //   }));
    // }
    // if (direction === "top" && position.top !== 0) {
    //   setPosition((position) => ({
    //     ...position,
    //     top: position.top - 300,
    //   }));
    // }
    // if (direction === "bottom" && position.top < 600) {
    //   setPosition((position) => ({
    //     ...position,
    //     top: position.top + 300,
    //   }));
    // }
    // setPosition((position) => {
    //   if (direction === "left" && position.left !== 0) {
    //     return {
    //       ...position,
    //       left: position.left - 300,
    //     };
    //   }
    //   if (direction === "right" && position.left < 600) {
    //     return {
    //       ...position,
    //       left: position.left + 300,
    //     };
    //   }
    //   if (direction === "top" && position.top !== 0) {
    //     return {
    //       ...position,
    //       top: position.top - 300,
    //     };
    //   }
    //   if (direction === "bottom" && position.top < 600) {
    //     return {
    //       ...position,
    //       top: position.top + 300,
    //     };
    //   }
    //   return { ...position };
    // });

    dispatch({ direction });
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      console.log(e.key);
      if (e.key === "ArrowUp") {
        handleMove("top");
      } else if (e.key === "ArrowDown") {
        handleMove("bottom");
      } else if (e.key === "ArrowLeft") {
        handleMove("left");
      } else if (e.key === "ArrowRight") {
        handleMove("right");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {console.log("state", position)}
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "900px",
            width: "900px",
            border: "1px solid",
            position: "relative",
          }}
        >
          <div
            style={{
              height: "300px",
              width: "300px",
              backgroundColor: "blue",
              position: "absolute",
              top: position.top + "px",
              left: position.left + "px",
              transition: "all 0.5s ease",
            }}
          ></div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {moves.map((move) => (
          <button
            key={move}
            onClick={() => dispatch({ direction: move })}
            style={{
              margin: "0 16px",
              fontSize: "24px",
            }}
          >
            {move}
          </button>
        ))}
      </div>
    </>
  );
};

export default Concept;
