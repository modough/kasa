import { createBrowserRouter } from 'react-router-dom'

import AboutPage from '../pages/AboutPage';
import AppartmentPage from '../pages/AppartmentPage';
import Home from '../pages/homePage';
import ErrorPage from '../pages/error/ErrorPage';



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/about",
        element: <AboutPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/:id",
        element: <AppartmentPage />,
        errorElement: <ErrorPage />
    }

]);