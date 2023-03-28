import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../error/errorPage';
import Home from '../pages/homePage';



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
]);