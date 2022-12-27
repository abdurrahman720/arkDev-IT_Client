import { createBrowserRouter } from "react-router-dom";
import Root from "./layouts/Root";
import Courses from "./Pages/Courses";
import Home from "./Pages/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },

            {
                path: '/courses',
                element: <Courses></Courses>

            }
        ]
    }
])