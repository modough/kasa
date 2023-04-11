import { useRouteError, Link } from "react-router-dom";
import '../../styles/errorPage.css';
import Layout from "../../components/Layout";

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <Layout>
            <div id="error-page">
                <h1>{error.status || '404'}</h1>
                <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
                <Link to='/'>
                    <p className="homepage">Retourner sur la page d'accueil</p>
                </Link>
            </div>
        </Layout>
    );
}
export default ErrorPage