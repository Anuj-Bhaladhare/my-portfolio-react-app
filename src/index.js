import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <>
    <ToastContainer />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>,
);

reportWebVitals();
