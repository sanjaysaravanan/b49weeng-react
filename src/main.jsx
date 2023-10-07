import React from 'react'; // Allows the JSX syntax
import ReactDOM from 'react-dom/client'; // allows the DOM manipulation
import App from './App.jsx';
import './index.css'
import UsersPage from './UsersPage.jsx';
import CounterPage from './CounterPage.jsx';
import Products from './Products.jsx';
import ReusablePage from './ReusablePage.jsx';
import LifeCycle from './LifeCycle.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Products />
    {/* <App /> */}
    {/* <UsersPage /> */}
    {/* <CounterPage /> */}
    {/* <ReusablePage /> */}
    {/* <LifeCycle /> */}
  </React.StrictMode>,
)
