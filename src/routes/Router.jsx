import { createBrowserRouter } from 'react-router-dom'
import AboutPage from '../pages/AboutPage';
import ApartmentPage from '../pages/ApartmentPage';
import Home from '../pages/HomePage';
import ErrorPage from '../pages/error/ErrorPage';

const Router = createBrowserRouter([
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
        path: "/housings/:id",
        type: "exact",
        element: <ApartmentPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/housings/:/*",
        element: <ErrorPage />
    }
]);
export default Router
/*<Router>
      <Routes>
        <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
        <Route path="/about" element={<AboutPage />} errorElement={<ErrorPage />} />
        <Route path="/housings/:id" element={<ApartmentPage />} errorElement={<ErrorPage />} />
        <Route path="/" element={<ErrorPage />} />
      </Routes>
    </Router>*/
