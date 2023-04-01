import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import mainData from '../data/mainData.json';

function Host() {
    const { id } = useParams();

    const findAppart = mainData.find((appart) => appart.id === id);


    return (
        <div className='host-details'>
            <p className='host-name'>{findAppart.host.name}</p>
            <img src={findAppart.host.picture} alt="image de l'hôte" />
        </div>
    )
}

export default Host