import BannerAboutPage from "../components/bannerAboutPAge";
import Collapse from "../components/collapse";
import Footer from "../components/Footer";
import Header from '../components/Header';

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