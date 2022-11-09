import Main from "../../../Layout/Main";
import Home from "../../Home/Home/Home";
import FullServices from "../../Services/FullServices";
import ServiceDetails from "../../Services/ServiceDetails";

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
            }
        ]
    }

])