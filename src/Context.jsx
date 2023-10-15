import { useState } from "react";
import ContextChild from "./ContextChild";
import ThemeContext from "./Theme-Context";
import ContextChildThree from "./ContextChildThree";

const Context = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {/* avoid props drilling */}
      <ContextChild />
      <ContextChildThree />
    </ThemeContext.Provider>
  );
};

export default Context;
