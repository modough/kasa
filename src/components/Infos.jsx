import { Fragment } from 'react'
import { useParams } from 'react-router-dom';
import mainData from '../data/mainData.json';
function Infos() {
    const { id } = useParams();
    const findAppart = mainData.find((appart) => appart.id === id);

    return (


        <section key={findAppart.id}>
            <h2 className='title'>{findAppart.title}</h2>
            <p className='location'>{findAppart.location}</p>
            <ul className='tags'>

                {findAppart.tags.map((tag, i) => <li key={i}>{tag}</li>)}




            </ul>
        </section>


    )
}

export default Infos