import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalProvider from './contexts/globalcontext';
import GlobalRouter from './router';
import GlobalStyle from './styles/globalstyle';
import {RouterProvider} from "react-router-dom";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <GlobalStyle />
      <RouterProvider router={GlobalRouter} />
    </GlobalProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
