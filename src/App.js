import './App.css';
import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Navigate, useRouteLoaderData } from "react-router-dom";
import RootLayout from "./pages/Root";
import Login from './pages/Login';
import Main from './pages/Main';

const router = createBrowserRouter([

  {
    path: "/home",
    element: <RootLayout />,
    children: [
      {
        path: "/home",
        element: <Main />
      },

    ]
  },
  {
    path: "/",
    element: <Login />
  },
])

function App() {
  return <RouterProvider router={router} />
         
}

export default App;
