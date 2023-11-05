import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from './Routes/MainLayOut';
import Home from './Components/Pages/Home/Home/Home';
import Registration from './Components/Pages/Registration/Registration';
import Login from './Components/Pages/LogIn/Login';
import AuthProvider from './Components/providers/AuthProvider';
import CreateAssignment from './Components/Pages/Create-Assignment/CreateAssignment';




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children:[
      {
       path: "/",
       element: <Home></Home>
      },
      {
        path: "registration",
        element:<Registration></Registration>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "createassignment",
        element: <CreateAssignment></CreateAssignment>
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
