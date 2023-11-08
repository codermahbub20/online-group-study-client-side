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
import ViewAssignment from './Components/Pages/View-Assignment/ViewAssignment';
import TakeAssignment from './Components/Pages/Take-Assignment/TakeAssignment';
import AllSubmited from './Components/Pages/AllSubmitedAssignment/AllSubmited';
import Mark from './Components/Pages/AllSubmitedAssignment/Mark';
import Errorpage from './Components/Pages/ErrorPage/Errorpage';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import MyAssignment from './Components/Pages/MyAssignment/MyAssignment';




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <Errorpage></Errorpage>,
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
        element: <PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>
      },
      {
        path: "allassignment",
        element: <AllAssignment></AllAssignment>,
        loader: () => fetch(`https://online-group-study-server-two.vercel.app/createAssignmentCount`)
      },
      {
        path: "/updateassignment/:id",
        element: <PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>,
        loader: ({ params }) => fetch(`https://online-group-study-server-two.vercel.app/createAssignment/${params.id}`)
      },
      {
        path: "/viewassignment/:id",
        element: <PrivateRoute><ViewAssignment></ViewAssignment></PrivateRoute>,
        loader: ({ params }) => fetch(`https://online-group-study-server-two.vercel.app/createAssignment/${params.id}`)
      },
      {
        path: "/takeassignment/:id",
        element: <TakeAssignment></TakeAssignment>,
        loader: ({ params }) => fetch(`https://online-group-study-server-two.vercel.app/createAssignment/${params.id}`)
      },
      {
        path: "/allSubmitted",
        element: <PrivateRoute><AllSubmited></AllSubmited></PrivateRoute>,
        
      },
      {
        path: "/giveMark/:id",
        element: <Mark></Mark>,
        loader: ({params})=>fetch(`https://online-group-study-server-two.vercel.app/submittedData/${params.id}`)
      },
      {
        path: "/myassignment",
        element: <MyAssignment></MyAssignment>
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
