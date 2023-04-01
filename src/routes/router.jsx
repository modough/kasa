import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../error/errorPage';
import AboutPage from '../pages/aboutPage';
import AppartmentPage from '../pages/AppartmentPage';
import Home from '../pages/homePage';



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