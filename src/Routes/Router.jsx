
import { createBrowserRouter } from "react-router";
import MainLayout from '../Layouts/MainLayout'
import Home from "../Pages/Home";
import Apps from "../Pages/Apps"
import Installation from '../Pages/Installation'
import ErrorPage from '../Pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement : <ErrorPage></ErrorPage>,
    hydrateFallbackElement : <p>Loading ...</p>,
    children:[
        {
           index:true,
            Component:Home,
            loader : () => fetch('./data.json')
        },
        {
            path:"/apps",
            Component : Apps
        },
        {
            path:"/installation",
            Component:Installation
        }
    ]
  },
]);
export default router;