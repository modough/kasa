import { lazy, Suspense } from 'react'
import { useParams } from 'react-router-dom';
import mainData from '../data/mainData.json';
import Layout from '../components/Layout';
import LoadingPage from "../components/Loading"
import ApartmentInfos from '../components/ApartmentInfos';

function ApartmentPage() {
    const { id } = useParams();
    const findApart = mainData.find((apart) => apart.id === id);
    const Lightbox = lazy(() => import('../components/Lightbox'))


    return (
        <section className="apartmentPage">
            <Layout>
                <Suspense fallback={<LoadingPage />}>
                    <Lightbox findApart={findApart} />
                    <ApartmentInfos findApart={findApart} />
                </Suspense>

            </Layout>
        </section>
    )
}
export default ApartmentPage