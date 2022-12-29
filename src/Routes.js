import { createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "./Authentication/PrivateRoutes";
import LeftSide from "./Components/LeftSide";
import RightSide from "./Components/RigshtSide";

import Root from "./layouts/Root";
import { Blog } from "./Pages/Blog";
import CheckOut from "./Pages/CheckOut";
import Course from "./Pages/Course";
import Courses from "./Pages/Courses";
import Faq from "./Pages/FAQs";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

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

            },
            {
                path: '/faqs',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
        
                path: '/courses/:id',
                loader: ({ params }) => fetch(`http://localhost:5222/courses/${params.id}`),
                element: <Course></Course>,
              
            },
            {
                path: '/course/:id',
               loader: ({ params }) => fetch(`http://localhost:5222/course/${params.id}`),
                element:  <RightSide></RightSide>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>
            }
            
      
           
        ],
        
       
    },
   
   
])