import { createBrowserRouter } from "react-router-dom";
import Root from "./layouts/Root";
import { Blog } from "./Pages/Blog";
import Course from "./Pages/Course";

import Courses from "./Pages/Courses";
import Faq from "./Pages/FAQs";

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
                path: '/courses/:id',
                loader: ({ params }) => fetch(`http://localhost:5222/courses/${params.id}`),
                element: <Course></Course>
            }
        ]
    }
])