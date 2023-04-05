import Header from '../components/header';
import Lightbox from '../components/Lightbox';
import AppartmentInfos from '../components/AppartmentInfos';
import { useParams } from 'react-router-dom';
import mainData from '../data/mainData.json';
import '../styles/appartmentPage.css';


function AppartmentPage() {
    const { id } = useParams();
    const findAppart = mainData.find((appart) => appart.id === id);

    return (
        <section className="appartmentPage">
            <Header classTypeHome={'home'} />
            <Lightbox findAppart={findAppart} />
            <AppartmentInfos findAppart={findAppart} />

        </section>
    )
}

export default AppartmentPage