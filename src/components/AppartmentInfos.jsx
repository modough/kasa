import '../styles/appartmentInfos.css';
import CollapseCards from './collapseCards';
import { Fragment } from 'react';
import Ratings from './ratings';
import Host from './Host';
import Infos from './Infos';


function AppartmentInfos({ findAppart }) {


    return (
        <Fragment>
            <section className='upper-infos'>
                <div className='left-infos'>
                    <Infos findAppart={findAppart} />
                </div>
                <div className='right-infos'>
                    <Host findAppart={findAppart} />
                    <Ratings findAppart={findAppart} />
                </div>
            </section>
            <section className='collapse-section housing'>
                <CollapseCards title="Description" description={findAppart.description} />
                <CollapseCards title="Equipements" description={findAppart.equipments.map((equipment, i) => <li key={i} >{equipment}</li>)} />
            </section>
        </Fragment>
    )
}

export default AppartmentInfos