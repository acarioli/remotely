import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { BrowserRouter } from "react-router-dom";
import 'rsuite/styles/index.less';
import reportWebVitals from './reportWebVitals';


import '@mui/material/';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

