import '../styles/appartmentInfos.css';
import CollapseCards from './collapseCards';
import { Fragment } from 'react';
import Ratings from './ratings';
import Host from './Host';
import Infos from './Infos';
import { useParams } from 'react-router-dom';
import mainData from '../data/mainData.json';

function AppartmentInfos() {
    const { id } = useParams();
    const findAppart = mainData.find((appart) => appart.id === id);

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
                <CollapseCards title="Description" description={findAppart.description} />
                <CollapseCards title="Equipements" description={findAppart.equipments.map((equipment, i) => <li key={i} >{equipment}</li>)} />
            </section>
        </Fragment>
    )
}

export default AppartmentInfos