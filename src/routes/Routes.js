import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import Cart from "../pages/Cart/Cart";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import Courses from "../pages/Courses/Courses";
import Faq from "../pages/Faq/Faq";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";

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
                element : <Courses></Courses>
            },
            {
                path : "/courses-details",
                element : <CourseDetails></CourseDetails>
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
        ]
    },
    {
        path : "*",
        element : <NotFound></NotFound>
    }
])