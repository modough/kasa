import { Fragment } from "react"
import BannerAboutPage from "../components/bannerAboutPAge"
import Collapse from "../components/collapse"
import Footer from "../components/footer"
import Header from '../components/header'

function AboutPage() {
    return (
        <Fragment>
            <Header />
            <BannerAboutPage />
            <Collapse />
            <Footer />
        </Fragment>
    )
}

export default AboutPage