import '../styles/apartmentInfos.css';
import CollapseCards from './CollapseCards';
import { Fragment } from 'react';
import Ratings from './Ratings';
import Host from './Host';
import Infos from './Infos';

function ApartmentInfos({ findApart }) {
    return (
        <Fragment>
            <section className='upper-infos'>
                <div className='left-infos'>
                    <Infos findApart={findApart} />
                </div>
                <div className='right-infos'>
                    <Host findApart={findApart} />
                    <Ratings findApart={findApart} />
                </div>
            </section>
            <section className='collapse-section housing'>
                <CollapseCards title="Description" description={findApart.description} />
                <CollapseCards title="Equipements" description={findApart.equipments.map((equipment, i) => <li key={equipment[i]}>{equipment}</li>)} />
            </section>
        </Fragment>
    )
}
export default ApartmentInfos