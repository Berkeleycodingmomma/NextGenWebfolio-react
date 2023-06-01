// Import React library
import React from 'react';
// Import ReactDOM client
import ReactDOM from 'react-dom/client';
// Import App component
import "./style/index.css";
import App from './App';

// Create a root element using ReactDOM.createRoot() and select the HTML element with an ID of 'root' as the container
const root = ReactDOM.createRoot(document.getElementById('root'));
// Render the App component inside the root element
root.render(
    <App />
);