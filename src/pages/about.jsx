import { Fragment } from "react"
import Banner from '../components/banner'
import Collapse from "../components/collapse"
import Footer from "../components/footer"
import Header from '../components/header'

function AboutPage() {
    return (
        <Fragment>
            <Header />
            <Banner />
            <Collapse />
            <Footer />
        </Fragment>
    )
}

export default AboutPage