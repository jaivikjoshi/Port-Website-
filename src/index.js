import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Memey from './Pages/Memey';
import Tradingbot from './Pages/Tradingbot';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "Memey",
    element: <Memey/>
  },
  {
    path: "Tradingbot",
    element: <Tradingbot/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router = {router} >
    
  </RouterProvider>
   
);
