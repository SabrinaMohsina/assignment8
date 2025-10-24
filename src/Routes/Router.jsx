
import { createBrowserRouter } from "react-router";
import MainLayout from '../Layouts/MainLayout'
import Home from "../Pages/Home";
import Apps from "../Pages/Apps"
import Installation from '../Pages/Installation'
import ErrorPage from '../Pages/ErrorPage'
import AppsDetails from '../Pages/AppsDetails'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    
    hydrateFallbackElement : <p>Loading ...</p>,
    children:[
        {
           index:true,
            Component:Home,
            // loader : () => fetch('/data.json')
        },
        {
            path:"/apps",
            Component : Apps
        },
        {
            path:"/installation",
            Component:Installation
        },
        {
          path:'/app/:id',
          element:<AppsDetails></AppsDetails>
        }
    ]
  },
]);
export default router;