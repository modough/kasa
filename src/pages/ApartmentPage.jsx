
import Lightbox from '../components/Lightbox';
import ApartmentInfos from '../components/ApartmentInfos';
import { useParams } from 'react-router-dom';
import mainData from '../data/mainData.json';
import Layout from '../components/Layout';

function ApartmentPage() {
    const { id } = useParams();
    const findApart = mainData.find((apart) => apart.id === id);

    return (
        <section className="apartmentPage">
            <Layout>
                <Lightbox findApart={findApart} />
                <ApartmentInfos findApart={findApart} />
            </Layout>
        </section>
    )
}
export default ApartmentPage