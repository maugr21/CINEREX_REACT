import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // You can keep this or remove if all CSS is in styles.css
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './styles.css'; // Your custom CSS
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();