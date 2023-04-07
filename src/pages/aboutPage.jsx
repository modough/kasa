import BannerAboutPage from "../components/bannerAboutPAge";
import Collapse from "../components/collapse";
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