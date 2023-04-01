import Header from '../components/header';


import Lightbox from '../components/Lightbox';
import AppartmentInfos from '../components/appartmentInfos';


function AppartmentPage() {

    return (
        <section className="appartmentPage">
            <Header />
            <Lightbox />
            <AppartmentInfos />

        </section>
    )
}

export default AppartmentPage