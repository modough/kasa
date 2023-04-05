
import BannerAboutPage from "../components/bannerAboutPAge"
import Collapse from "../components/collapse"
import Footer from "../components/footer"
import Header from '../components/header'
import '../styles/aboutPage.css'

function AboutPage() {
    return (
        <section className="aboutPage">
            <Header classTypeAbout={'about'} />
            <BannerAboutPage />
            <Collapse />
            <Footer />
        </section>
    )
}

export default AboutPage