import React from "react"; // Allows the JSX syntax
import ReactDOM from "react-dom/client"; // allows the DOM manipulation
import App from "./App.jsx";
import "./index.css";
import UsersPage from "./UsersPage.jsx";
import CounterPage from "./CounterPage.jsx";
import Products from "./Products.jsx";
import ReusablePage from "./ReusablePage.jsx";
import LifeCycle from "./LifeCycle.jsx";
import LifeCycleTwo from "./LifeCycleTwo.jsx";
import LifeCycleThree from "./LifeCycle3.jsx";
import GrandParent from "./PropsDrilling.jsx";
import Context from "./Context.jsx";
import RefConcept from "./RefConcept.jsx";
import Concept from "./UseReducer.jsx";
import TicTacToe from "./components/TicTacToe.jsx";
import CrudOperations from "./CrudOperations.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CrudOperations />
  // <TicTacToe />
  // <Concept />
  // <React.StrictMode>
  //   {/* <Products /> */}
  //   {/* <App /> */}
  //   {/* <UsersPage /> */}
  //   {/* <CounterPage /> */}
  //   {/* <ReusablePage /> */}
  // <LifeCycle />
  // </React.StrictMode>,
);
