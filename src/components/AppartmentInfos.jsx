import '../styles/appartmentInfos.css';
import CollapseCards from './collapseCards';
import { Fragment } from 'react';
import Ratings from './ratings';
import Host from './Host';
import Infos from './Infos';

function AppartmentInfos() {
    return (
        <Fragment>
            <section className='upper-infos'>
                <div className='left-infos'>
                    <Infos />
                </div>
                <div className='right-infos'>
                    <Host />
                    <Ratings />
                </div>
            </section>
            <section className='collapseCards'>
                <CollapseCards title="Description" description="Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). " />
                <CollapseCards title="Equipements" />
            </section>
        </Fragment>
    )
}

export default AppartmentInfos