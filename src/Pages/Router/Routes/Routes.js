import Main from "../../../Layout/Main";
import Home from "../../Home/Home/Home";
import Login from "../../Login/Login";
import AddReview from "../../Services/AddReview";
import FullServices from "../../Services/FullServices";
import MyReviews from "../../Services/MyReviews";
import ServiceDetails from "../../Services/ServiceDetails";
import UpdateReview from "../../Services/UpdateReview";
import SignUp from "../../SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <FullServices></FullServices>
            },
            {
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/review/:id',
                element: <PrivateRoute><AddReview></AddReview></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/update',
                element: <PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>
            }
        ]
    }

])