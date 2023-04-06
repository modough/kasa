import Header from "../components/Header"
import Footer from "../components/Footer"
import Banner from "../components/Banner"
import '../styles/homePage.css'
import Cards from "../components/Cards"

function Home() {
    return (
        <section className="homePage">
            <Header classTypeHome={'home'} />
            <Banner />
            <Cards />
            <Footer />
        </section>
    )
}
export default Home