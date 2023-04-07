import Header from "../components/Header"
import Footer from "../components/Footer"
import Banner from "../components/Banner"
import Layout from "../components/Layout"
import Cards from "../components/Cards"


function Home() {
    return (
        <section className="homePage">
            <Layout>
                <Banner />
                <Cards />
            </Layout>
        </section>
    )
}
export default Home