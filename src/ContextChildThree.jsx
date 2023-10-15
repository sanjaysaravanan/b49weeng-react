import { useContext } from "react";
import ThemeContext from "./Theme-Context";

const ContextChildThree = () => {
  // Consume a Context
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: theme === "light" ? "#fff" : "#000",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h1>I am another Child</h1>
      {console.log("theme", theme)}
      <button type="button" onClick={changeTheme}>
        Change Theme
      </button>
    </div>
  );
};

export default ContextChildThree;
