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
import AllAssignment from './Components/Pages/All-Assignment/AllAssignment';
import UpdateAssignment from './Components/Pages/Update-Assignment/UpdateAssignment';




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "registration",
        element: <Registration></Registration>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "createassignment",
        element: <CreateAssignment></CreateAssignment>
      },
      {
        path: "allassignment",
        element: <AllAssignment></AllAssignment>,
        // loader: ()=>fetch(`http://localhost:5000/createAssignment`)
      },
      {
        path: "/updateassignment/:id",
        element: <UpdateAssignment></UpdateAssignment>,
       loader: ({params}) => fetch(`http://localhost:5000/createAssignment/${params.id}`)
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
