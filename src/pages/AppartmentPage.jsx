import Header from '../components/header';
import mainData from '../data/mainData.json';
import { Fragment } from 'react';
import Lightbox from '../components/Lightbox';
import AppartmentInfos from '../components/appartmentInfos';

function AppartmentPage() {
    return (
        <Fragment>
            <Header />
            <Lightbox />
            <AppartmentInfos />

        </Fragment>
    )
}

export default AppartmentPage