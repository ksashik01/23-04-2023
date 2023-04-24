import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/layout/Main';
import Login from './component/layout/Login';
import Register from './component/layout/Register';
import Home from './component/layout/Home';
import AuthProvider from './provider/AuthProvider';


const router = createBrowserRouter ([
  {
    path: "/",
    element: <Main></Main>,
    children:[

      {
        path:'/',
        element:<Home></Home>

      },

      {
        path:'/login',
        element:<Login></Login>
      },

      {
        path:'/register',
        element:<Register></Register>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />

    </AuthProvider>
    

  </React.StrictMode>,
)
