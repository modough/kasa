import BannerAboutPage from "../components/bannerAboutPAge";
import Collapse from "../components/collapse";
import Footer from "../components/Footer";
import Header from '../components/Header';
import Layout from "../components/Layout";

function AboutPage() {
    return (
        <section className="aboutPage">
            <Layout>
                <BannerAboutPage />
                <Collapse />
            </Layout>
        </section>
    )
}
export default AboutPage