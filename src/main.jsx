import React from 'react'; // Allows the JSX syntax
import ReactDOM from 'react-dom/client'; // allows the DOM manipulation
import App from './App.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
