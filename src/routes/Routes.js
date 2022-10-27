import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import Cart from "../pages/Cart/Cart";
import Courses from "../pages/Courses/Courses";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Faq from "../pages/Faq/Faq";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Category from "../pages/Category/Category";
import Profile from "../pages/Profile/Profile";

export const router = createBrowserRouter([
    {
        path : "/",
        element : <Main></Main>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "/courses",
                element : <Courses></Courses>,
                loader : () => {
                    return fetch(`https://e-learning-with-dipu-server.vercel.app/courses`)
                }
            },
            {
                path : "/courses-details/:id",
                element : <CourseDetails></CourseDetails>,
                loader : ({params}) => {
                    return fetch(`https://e-learning-with-dipu-server.vercel.app/courses-details/${params.id}`)
                }
            },

            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`https://e-learning-with-dipu-server.vercel.app/courses-details/category/${params.id}`)
            },

            {
                path : "/cart",
                element : <Cart></Cart>
            },
            {
                path : "/faq",
                element : <Faq></Faq>
            },
            {
                path : "/blog",
                element :<Blog></Blog>
            },
            {
                path : "/login",
                element :<Login></Login>
            },
            {
                path : "/registration",
                element :<Registration></Registration>
            },
            {
                path : "/profile",
                element :<Profile></Profile>
            },
        ]
    },
    {
        path : "*",
        element : <NotFound></NotFound>
    }
])