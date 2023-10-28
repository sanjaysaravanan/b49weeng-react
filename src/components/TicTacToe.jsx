import { useEffect, useState } from "react";

import styles from "./TicTacToe.module.css";

const TicTacToe = () => {
  const [arr, setArr] = useState(["", "", "", "", "", "", "", "", ""]);

  const [mark, setMark] = useState("x");

  const handleMove = (player, i) => {
    const tempArr = [...arr];
    tempArr[i] = player;
    setArr(tempArr);
    if (player === "x") {
      setMark("o");
    } else {
      setMark("x");
    }
  };

  const checkWinning = () => {
    let winFlag = false;
    // vertical winning cases
    // values of indexes 0, 3, 6 are same
    if (arr[0] && arr[0] === arr[3] && arr[0] === arr[6]) {
      alert(`${arr[0]} has won!`);
      winFlag = true;
    }
    // values of indexes 1, 4, 7 are same
    else if (arr[1] && arr[1] === arr[4] && arr[1] === arr[7]) {
      alert(`${arr[1]} has won!`);
      winFlag = true;
    }
    // values of indexes 2, 5, 8 are same
    else if (arr[2] && arr[2] === arr[5] && arr[2] === arr[8]) {
      alert(`${arr[2]} has won!`);
      winFlag = true;
    }

    // Try doing for Horizontal & Cross wins
    if (winFlag) {
      window.location.reload();
    }
  };

  useEffect(() => {
    if (arr.filter((x) => x !== "").length > 4) {
      setTimeout(checkWinning, 100);
    }
  }, [arr]);

  return (
    <div className={styles["container"]}>
      {arr.map((val, i) => (
        // Here we can use index as key because we are not deleting any items
        <div
          key={i}
          className={styles["itemBox"]}
          style={{
            color: val === "x" ? "#000" : "#fff",
          }}
          onClick={() => handleMove(mark, i)}
        >
          {val}
        </div>
      ))}
      <div
        className={`${styles["line"]} ${styles["vertical"]}`}
        style={{
          left: "195px",
        }}
      ></div>
      <div
        className={`${styles["line"]} ${styles["vertical"]}`}
        style={{
          left: "395px",
        }}
      ></div>
      <div
        className={`${styles["line"]} ${styles["horizontal"]}`}
        style={{
          top: "195px",
        }}
      ></div>
      <div
        className={`${styles["line"]} ${styles["horizontal"]}`}
        style={{
          top: "395px",
        }}
      ></div>
    </div>
  );
};

export default TicTacToe;
