import { useRouteError, Link } from "react-router-dom";
import '../../styles/errorPage.css';

import Header from "../../components/header";
import { Fragment } from "react";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <Fragment>
            <Header />
            <div id="error-page">
                <h1>{error.status}</h1>
                <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
                <Link to='/'>
                    <p className="homepage">Retourner sur la page d'accueil</p>
                </Link>
            </div>
        </Fragment>
    );
}