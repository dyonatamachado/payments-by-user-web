import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Sheet from './pages/Sheet';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
          path: "/",
          element: < Dashboard/>
      },
      {
        path: "/dashboard",
        element: < Dashboard/>
      },
      {
        path: "/users",
        element: < Users />
      },
      {
        path: "/sheet",
        element: < Sheet />
      }
    ]
  }
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
