import { useRouteError, Link } from "react-router-dom";
import '../../styles/errorPage.css';
import Header from "../../components/Header";
import { Fragment } from "react";

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <Fragment>
            <Header />
            <div id="error-page">
                <h1>{error.status || '404'}</h1>
                <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
                <Link to='/'>
                    <p className="homepage">Retourner sur la page d'accueil</p>
                </Link>
            </div>
        </Fragment>
    );
}
export default ErrorPage