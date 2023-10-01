import React from 'react'; // Allows the JSX syntax
import ReactDOM from 'react-dom/client'; // allows the DOM manipulation
import App from './App.jsx';
import './index.css'
import UsersPage from './UsersPage.jsx';
import CounterPage from './CounterPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <UsersPage />
    {/* <CounterPage /> */}
  </React.StrictMode>,
)
