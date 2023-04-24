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
import Orders from './component/layout/Orders';
import PrivateRoute from './Routes/PrivateRoute';
import Profile from './component/Profile';



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
      {
        path: '/orders',
        element: <PrivateRoute>
        <Orders></Orders> 

        </PrivateRoute>
      },
      {
        path:'/profile',
        element:<PrivateRoute> 
          <Profile>
          </Profile> 
        </PrivateRoute>

      }



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
