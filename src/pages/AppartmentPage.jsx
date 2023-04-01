import Header from '../components/header';
import mainData from '../data/mainData.json';

import Lightbox from '../components/Lightbox';
import AppartmentInfos from '../components/appartmentInfos';
import { useParams } from 'react-router-dom';

function AppartmentPage() {
    const { id } = useParams;
    const findAppart = mainData.find((appart) => appart.id === id);
    return (
        <section className="appartmentPage">
            <Header />
            <Lightbox />
            <AppartmentInfos />

        </section>
    )
}

export default AppartmentPage