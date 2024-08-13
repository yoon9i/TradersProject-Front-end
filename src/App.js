import './App.css';
import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Navigate, useRouteLoaderData } from "react-router-dom";
import RootLayout from "./pages/Root";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Main from './pages/Main';
import DisUse from './pages/DisUse';
import Receipt from './pages/Receipt';
import MobileLogin from './pages/ModileLogin';
import MobileMain from './pages/MobileMain';
import MobileProductDetail from './pages/MobileProductDetail';
import Stock from './pages/StockList';
import OrderCart from './pages/OrderCart';
import QrCode from './pages/QrCode';
import ReceiptModify from './pages/ReceiptModify';
import ProtectedRoute from './ProtectedRoute';

//관리자 페이지 
import AdminMain from './pages/AdminMain';
import AdminGoods from './pages/AdminGoods';
import AdminMovement from './pages/AdminMovement';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/saga-blue/theme.css';  // 테마
import 'primereact/resources/primereact.min.css';           // 기본 스타일
import 'primeicons/primeicons.css';                         // 아이콘


const router = createBrowserRouter([

  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <ProtectedRoute element={Main} />
      },
      {
        path: "/receipt",
        element: <ProtectedRoute element={Receipt} />

      },
      {
        path: "/receiptmodify",
        element: <ReceiptModify />
      },
      {
        path: "/qrcode",
        element: <QrCode />
      },
      {
        path: "/stock",
        element: <Stock />
      },
      {
        path: "/ordercart",
        element: <OrderCart />
      },
      {
        path: "/disuse",
        element: <DisUse />
      }

    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/mobile/login",
    element: <MobileLogin />
  },
  {
    path: "/mobile/main",
    element: <MobileMain />
  },
  {
    path: "/mobile/productDetail/:gcode",
    element: <MobileProductDetail />
  },
  {
    path: "/adminMain",
    element: <ProtectedRoute element={AdminMain} />
  },
  {
    path: "/adminGoods",
    element: <ProtectedRoute element={AdminGoods} />
  },
  {
    path: "/adminMovement",
    element: <ProtectedRoute element={AdminMovement} />
  }
])

function App() {
  return (
    <PrimeReactProvider>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  );


}

export default App;
