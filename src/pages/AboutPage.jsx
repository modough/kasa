import BannerAboutPage from "../components/BannerAboutPage";
import Collapse from "../components/Collapse";
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