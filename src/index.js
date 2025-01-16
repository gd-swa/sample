import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App'; // Assuming App.js contains your main component

// // Ensure this matches the id in your HTML file
// const rootElement = document.getElementById('root');
// if (rootElement) {
//   const root = ReactDOM.createRoot(rootElement);
//   root.render(<React.StrictMode><App /></React.StrictMode>);
// } 
