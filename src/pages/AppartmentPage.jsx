
import Lightbox from '../components/Lightbox';
import AppartmentInfos from '../components/AppartmentInfos';
import { useParams } from 'react-router-dom';
import mainData from '../data/mainData.json';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

function AppartmentPage() {
    const { id } = useParams();
    const findAppart = mainData.find((appart) => appart.id === id);

    return (
        <section className="appartmentPage">
            <Layout>
                <Lightbox findAppart={findAppart} />
                <AppartmentInfos findAppart={findAppart} />
            </Layout>
        </section>
    )
}
export default AppartmentPage